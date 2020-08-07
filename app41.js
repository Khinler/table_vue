const vm = new Vue({
    el: 'main',
    data: {
        // codE:null,
        codA:null,
        nomA:null,
        tipoA:null,
        sem:null,
        
    	ced:null,
    	nom:null,
    	ape:null,
    	sexo:null,
    	dir:null,
    	tel:null,
        email:null,
        registrarEst : true,
        registrarProg : true,
        posEst:null,
        posProg:null,
        facSeleccionada:null,
        codP:null,
        nomP:null,
        numC:null,
        nsem:null,
        facultades:[{"cod":"F01","nom":"Educacion y Ciencias Humans"},
        {"cod":"F02","nom":"Ingenieria"},
        {"cod":"F03","nom":"Medicina Veterinarioa y Zootecnia"},
        {"cod":"F04","nom":"Agronomia"},
        {"cod":"F05","nom":"Ciencias Jurídicas y Administrativas"},
        {"cod":"F06","nom":"Ciencias Básica"},
        {"cod":"F07","nom":"Salud"}],

        programas: [{"codP":"P1001","nomP":"LIC INORMÁTICA","numC":"160","nsem":"10","codF":"F01"},
        {"codP":"P1011","nomP":"LIC Lengua Castellana","numC":"160","nsem":"10","codF":"F07"}],

        asignatura:[{"codA":"FP01","nomA":"Fundamentos de Programación","numC":"3","sem":"4","tipoA":"T-P","codP":"P1001"  },
        {"codA":"FA01","nomA":"Fundamentos de Algoritmias","numC":"3","sem":"2","tipoA":"T-P","codP":"P1001"},
        {"codA":"L001","nomA":"Literatura Anglosajona","numC":"1","sem":"2","tipoA":"T","codP":"P1011"},],

        matriculas:[{"codE":"123","codA":"FP01","perAca":"2019-1"}],

        alumnos:[{/* "codE":"123" */"codA":"3RRSD","ced":"123456","nom":"Maria","ape":"Petro","sexo":"F","dir":"La Granja","tel":"888888","email":"ffff@gmail.com"}],

    },
    methods:{
    	agregar(){
            var est=new Object();
            est.codA=this.codA;
            est.nomA=this.nomA;
            est.numC=this.numC;
            est.sem=this.sem;
            est.tipoA=this.tipoA;
            est.codP=this.codP;
            // est.codE=this.codE;
            // est.codA=this.codA;
    		// est.ced=this.ced;
    		// est.nom=this.nom;
    		// est.ape=this.ape;
    		// est.sexo=this.sexo;
    		// est.dir=this.dir;
    		// est.tel=this.tel;
            // est.email=this.email;

            if (this.registrarEst)
            {
            this.asignatura.push(est);
            alert("Guardado ...")
            }
            else
            {   
                this.asignatura[this.posEst] = est;
                this.registrarEst = true;
                alert("Actualizado ...")
             }
    		
    	},

        editar(pos)
        {
            // this.codE=this.asignatura[pos].codE;
            this.codA=this.asignatura[pos].codA;
            this.nomA=this.asignatura[pos].nomA;
            this.numC = this.asignatura[pos].numC;
            this.sem = this.asignatura[pos].sem;
            this.tipoA = this.asignatura[pos].tipoA;
            this.codP = this.asignatura[pos].codP;
            this.tel = this.asignatura[pos].tel;
            this.email = this.asignatura[pos].email;
            this.posEst =pos;
            this.registrarEst = false

        },
        eliminar(pos)
        {
            this.asignatura.splice(pos,1);
        },


        agregarProg(){
            var est=new Object();
            est.codA=this.codA;
            est.nomA=this.nomA;
            est.numC=this.numC;
            est.sem=this.sem;
            est.tipoA=this.tipoA;
            est.codP=this.codP;
            est.codF=this.facSeleccionada;
            if (this.registrarProg)
            {
            this.programas.push(est);
            alert("Guardado ...")
            }
            else
            {   
                this.programas[this.posProg] = est;
                this.registrarProg = true;
                alert("Actualizado ...")
             }
            
        },

        editarProg(pos)
        {
            this.codA=this.programas[pos].codA;
            this.nomA=this.programas[pos].nomA;
            this.numC = this.programas[pos].numC;
            this.sem = this.programas[pos].sem;
            this.tipoA = this.programas[pos].tipoA;
            this.codP= this.programas[pos].codP;
            this.posProg =pos;
            this.registrarProg = false

        },
        eliminarProg(pos)
        {
            this.programas.splice(pos,1);
        },
        buscarFac(codF)
        { 
            for(i in this.facultades){
                if(this.facultades[i].cod==codF)
                    return this.facultades[i].nom;
                }
            
        }
                


    }
});