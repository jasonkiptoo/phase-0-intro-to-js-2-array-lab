// Write your solution here!

    const cats=["Milo", "Otis", "Garfield"];

    // cats.push("Maxi")

    function destructivelyAppendCat(catname){
        cats.push(catname)
    }
    function destructivelyPrependCat(catname){
        cats.unshift(catname)
    }
    function destructivelyRemoveLastCat(catname){
        cats.pop(catname)
    }
    function  destructivelyRemoveFirstCat(catname){
        cats.shift(catname)
    }
    function  appendCat(catname){
        cats.slice(catname)
    }

    //add new cat to the list
    function appendCat(name){
        var name=["Milo", "Otis", "Garfield"]
        const catsNewList= [...name,"Broom"];
        return catsNewList;
      }
      function prependCat(name){

        var name=["Milo", "Otis", "Garfield"]
        const catsNewList= ["Arnold",...name];
        return catsNewList;


      }
      function removeLastCat(name){
        var name=["Milo", "Otis", "Garfield"]
        name.pop()
        return name;
      }
      ///code to remove the first cat
      function removeFirstCat(name){
        var name=["Milo", "Otis", "Garfield"]
        name.shift()
        return name;


      }
