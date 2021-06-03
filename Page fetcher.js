const fetcher = (location,filename) =>{
    const fs = require('fs')

    const content = location;

    
    fs.writeFile(filename, content, err => {
      if (err) {
        console.error(err)
        return
      }
      console.log("file written")
    })

}
