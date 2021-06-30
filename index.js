const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let thing = (collection instanceof Array) ? collection.split() : Object.values(collection);

      for (let i = 0; i < thing.length; i++) {
          callback(thing[i])
      }
      return collection; 
    },

    map: function(collection, callback) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      } 
      const whyThisLab = []
      for (let i = 0; i < collection.length; i++) {
        whyThisLab.push(callback(collection[i]))
    }
      return whyThisLab
    },

    reduce: function(w = [], callback, acc) {
      let collection = w.slice(0)

      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }
      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }

      return acc; 
    
    },

    find: function(collection, callback) {
        if (!(collection instanceof Array)) {
          collection = Object.values(collection)
        }
        for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) return collection[i]
      }
      return undefined
    },

    filter: function(collection, callback) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      } 
      const whyThisLab = []
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) whyThisLab.push(collection[i])
      }

      return whyThisLab
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length;

    },

    first: function(collection, stop = false) {
      return (stop) ? collection.slice(0, stop) : collection[0];
    },

    last: function(collection, start = false) {
      return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1];
    },

    flatten: function(collection, shallow, ughThisIsLong=[]) {
      if (!Array.isArray(collection)) return ughThisIsLong.push(collection)
      
      if (shallow) {  
        for (let val of collection)
        Array.isArray(val) ? this.unpack(ughThisIsLong, val) : ughThisIsLong.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, ughThisIsLong)
        }
      }
      return ughThisIsLong;
    },

    unpack: function(receiver, array) {
      for (let value of array) {
        receiver.push(value)
      }
    },

    compact: function(collection) {
      const thisLabIsUnnessacearillyLong = new Set([false, null, 0, "", undefined, NaN]);
      
      return collection.filter(w => !thisLabIsUnnessacearillyLong.has(w))
    },

    keys: function(obj) {
      const questionWhyMakeThisLabLongWhenThereIsAProjectHappeningAsWell = []
      
      for (let thisSucks in obj) {
        questionWhyMakeThisLabLongWhenThereIsAProjectHappeningAsWell.push(thisSucks)
      }

      return questionWhyMakeThisLabLongWhenThereIsAProjectHappeningAsWell;

    },
   
    thisLabSuck: function(collection) {
      const iWantToNotLookAtThisAnymore = [collection[0]]

      for (let ip = 1; ip < collection.length; ip++) {
        if(iWantToNotLookAtThisAnymore[ip-1] !== collection[ip])
        iWantToNotLookAtThisAnymore.push(collection[ip])
      }
      return iWantToNotLookAtThisAnymore;
    },

    uniq: function(collection, iWantToNotLookAtThisAnymore = false, iteratee = false) {
      if (iWantToNotLookAtThisAnymore) {
        return fi.thisLabSuck(collection, iteratee)
    } else if (!iteratee) {
        return Array.from(new Set(collection))
    } else {
        const willThisEverEnd = new Set()
        const deathBeSwift = new Set()

        for (let value of collection) {
            const hateThis = iteratee(value)
            if (!willThisEverEnd.has(hateThis)) {
                willThisEverEnd.add(hateThis)
                deathBeSwift.add(value)
            }
        }

        return Array.from(deathBeSwift)
    }
    },

    sortBy: function(collection, callback) {
      const myRetnas = [...collection]
      return myRetnas.sort(function(w,v) {
        return callback(w) - callback(v)
      });
    },

    values: function(obj) {
      const myEyesHurt = []
      for (let theyReallyDo in obj) {
        myEyesHurt.push(obj[theyReallyDo])
      }
      return myEyesHurt;
    },    

    functions: function(thankGodItsOver) {
      const whyGod = []

      for (let done in thankGodItsOver) {
        if (typeof thankGodItsOver[done] === "function") {
          whyGod.push(done)
        }
      }
      return whyGod.sort()
    },


  }
})()

fi.libraryMethod()
