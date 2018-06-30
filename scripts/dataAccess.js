function search () {
    url = "https://v3v10.vitechinc.com/solr/v_participant/select?indent=on&wt=json&q=state:Alaska&rows=1";
    // $.getJSON(url, function(data) {
    //     console.log(data.response.docs[0]['state']);
    // });
    getJsn(); // Confirm the variable was saved
};

function getJsn () {
    var stateArray = [];
    var idArray = [];
    url = "https://v3v10.vitechinc.com/solr/v_participant/select?indent=on&wt=json&q=*:*&rows=100&omitHeader=true";    
    $.getJSON(url, function(data){
        var qresult = data.response.docs;
        for (var x = 0; x < qresult.length; x ++){
            // y = ConvertToCSV(JSON.stringify(data));
            
            // console.log(qresult[x])
            stateArray += qresult[x]['state'] + ", ";
            idArray += qresult[x]['id'] + ", ";
        }
        console.log(ConvertToCSV(qresult));
        // console.log(stateArray.toString());
        // console.log(idArray.toString());
    });

    function ConvertToCSV(objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                // if (line != '') line += ','
                if (array[i][index] == ''){
                    line += " ,"
                } else{
                    line += array[i][index] + ",";
                } 
            }
            str += line + '\r\n';
        }
        return str;
    }
    //     $.ajax({
//        url : url,
//        method: "GET",
//        datatype: 'json',
//        success: function (data) {
           
//         //    console.log(data["Response"]);
//         //    for (var x = 0; x < data.length; x ++){
//         //        stateArray += data[x].state;
//         //        idArray += data[x].id;
//         //    }
//         //    alert(stateArray.toString());
//         //    alert(idArray.toString());
//        }
//    });
} 