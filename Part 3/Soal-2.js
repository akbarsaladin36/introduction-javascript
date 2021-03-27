    const getMonth = (callback) => {
      setTimeout(()=> {
        let error = true;
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 'September', 'October', 'November', 'Desember'];
        if(!error){
          callback(null, month);
        }else{
          callback(new Error('Sorry Data is Not Found'), []);
        }
      }, 4000)
    }

    const showMonth = (isError, data) => {
      if(!isError) {
        data.map(function(result) {
          console.log(result);
        })
        //console.log(isError);
      } else {
        console.log(isError);
      }
    }

      getMonth(showMonth);