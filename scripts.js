main = () => {
    var str = "cumuyrje";
    var res = new Array();
    res = str.split("");
    var text = "";
    var filter = new Array("r","j");
    var totalmatch = 0;
  
    for ( var i = 0; i < res.length; i++ ) {
      for ( var j = 0; j < filter.length; j++ ) {
        if (res[i] == filter[j]) {
          totalmatch ++;
        }
      }  
    }
  
    if ( totalmatch > 1 ) {
      for ( x = 0; x < res.length; x++ ) {
        if ("aiueo".indexOf(res[x]) > 0) {
          res[x] = res[x].toUpperCase();
        } else if ( res[x] === "r") {
          res[x] = "j";
        } else if ( res[x] === "j") {
          res[x] = "r";
        }else{
          res[x] = `${x}#`;
        }
          text += res[x];
      }
    } else if ( totalmatch < 2) {
        for ( x = 0; x < res.length; x++) {
          if ("aiueo".indexOf(res[x]) > 0) {
          res[x] = res[x].toUpperCase();
          } else if (res[x] === "r") {
            res[x] = "r";
          } else if (res[x] === "j") {
            res[x] = "j";
          } else {
            res[x] = `${x}#`;
          }
            text += res[x];
        }
    }
  }

  main();