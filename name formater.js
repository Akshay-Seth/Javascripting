class NameFormatter {

    invertName(name) {
        if(name === undefined) return undefined;
        name = name.trim();
        let nameArr = name.split(' ');
        if(name === '') {
            // console.log('name is empty: ', name)
            return '';
        }
        if(name.indexOf(' ') < 0 && name.indexOf('.') < 0) {
            // console.log('name has no space: ', name)
            return name;
        }
        // if(name.indexOf(' ') < 0 && name.indexOf('.') < 0) {
        //     // console.log('name is: ', name)
        //     return name.trim();
        // }
        
        if (nameArr.length == 1) {
            return '';
        } else if(nameArr.length === 2 && name.indexOf('.') < 0) {
            return `${nameArr[1]}, ${nameArr[0]}`
        } else if(nameArr.length === 2 && name.indexOf('.') >= 0) {
            return `${nameArr[0]} ${nameArr[1]}`
        } else if (nameArr.length === 3 && name.indexOf('.') >= 0) {
            return `${nameArr[0]} ${nameArr[2]}, ${nameArr[1]}`
        }

    }
  
  }
  
  module.exports = NameFormatter;