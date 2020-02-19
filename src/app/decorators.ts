import {Component} from '@angular/core';

type Constructor<T = {}> = new (...args: any[]) => T;

export function Deprecated(oldSelector: string) { // This is a decorator factory
  return <T extends Constructor>(Base: T) => {
    return class Deprecated extends Base {
      selectors = [];
      constructor(...args: any[]) {
         super(...args);
         const selector = new Component((Deprecated as any).__annotations__[0]).selector;
         this.selectors = selector.split(', ');
         this.selectors = this.selectors.filter(selector => selector !== oldSelector);
         console.warn('The selector "' + oldSelector + '" is going to be deprecated. Please use one of these selectors [ ' + this.selectors.toString() + ' ]');
      }
    };
  };
}
