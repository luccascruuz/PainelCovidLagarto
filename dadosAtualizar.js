var numConf = 690
        var auxConf = 673
        var numRecu = 263
        var auxRecu = 257
        var numObi = 20
        var auxObi = 19

        var NumTotalConf = document.getElementById("NumTotalConf")
        var NumDiaConf = document.getElementById("NumDiaConf")
        var NumAtiv = document.getElementById("NumAtiv")
        NumTotalConf.innerHTML = numConf
        NumDiaConf.innerHTML = numConf-auxConf
        NumAtiv.innerHTML = numConf-numRecu


        var NumTotalRecu = document.getElementById("NumTotalRecu")
        var NumPercRecu = document.getElementById("NumPorce")
        var NumDiaRecu = document.getElementById("NumDiaRecu")
        NumTotalRecu.innerHTML = numRecu
        NumPercRecu.innerHTML = (Math.round((numRecu*100)/numConf))
        NumDiaRecu.innerHTML = numRecu-auxRecu


        var NumTotalObi = document.getElementById("NumTotalObi")
        var NumPercObi = document.getElementById("NumPorceObi")
        var NumDiaObi = document.getElementById("NumDiaObi")
        NumTotalObi.innerHTML = numObi
        NumPercObi.innerHTML = (Math.round((numObi*100)/numConf))
        NumDiaObi.innerHTML = numObi-auxObi
