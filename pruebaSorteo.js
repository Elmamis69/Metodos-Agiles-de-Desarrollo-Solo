$(function() {

    var msa = [

            { name: "15022    Juán Pérez" },
            { name:"15023  Alejandro López" },
            { name: "15024    Carlos Montes" },
            { name:"15030     Daniel Armando" },
            { name: "15032   Carlos Andrés" },
            { name: "15033    Adrian Felix" },
            { name: "15039 Joselin Vizcarra" },
            { name: "15041   Jesus Alvarez" },
            { name: "15045   Lizeth Lugo" },
        
        ],
        $input = $('input'),
        random_index;

    function removeItemFromArr ( arr, item ) {
    var i = arr.indexOf( item );
 
      if ( i !== -1 ) {
          arr.splice( i, 1 );
        }
    }
	
	removeItemFromArr( msa, "15022    Juán Pérez" );
	console.info( msa );
	
    // Lista recursiva hasta detenerse en el elemento configurado
    function makeSlotList(list){
		
        //soporta hasta 18 valores en la animacion
        if(list.length<20){//el valor puede ser ajustado
            var index = _.random(msa.length-1);
            if(list.length===1){
                /*
                    elemento inicial de la lista
                */
                random_index = index;
            }
            list.push( '<li index='+_.random(msa.length-1)+'>'+msa[index].name+'</li>' );
            return makeSlotList(list);
        } else {
            // Dio un giro
            // La entrada se limpia
            $input.val('');
            // Se agrega el elemento seleccionado
            $('#slot').html(list.join('')).parent().show().trigger('spin');
            return list;
        }
    }

    // Se crea la lista de elementos o slot
    function makeSlots(){
        // Inicia en el valor aleatorio previo
        var list = ['<li>'+$input.val()+'</li>'];

        // Se hace recursivo el llamado
        makeSlotList(list);
    }

    $('#slot').jSlots({
        number: 1,
        spinner : '.jSlots-wrapper',
        spinEvent: 'spin',
        time: 300,
        loops: 1,
        endNum: 2,// Finaliza en el segundo elemento del arreglo aleatorio
        onEnd: function(finalElement){
            // Set result
            $input.val(msa[random_index].name);
			
            // Oculta spiner
            $(this.spinner).hide();
        }
    });

    //elemento aleatorio
    $('#random_location').on('click', makeSlots);
});