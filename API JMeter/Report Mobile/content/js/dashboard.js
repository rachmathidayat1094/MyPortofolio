/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 12.1, "KoPercent": 87.9};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.020666666666666667, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.01, 500, 1500, "POST Seller product"], "isController": false}, {"data": [0.015, 500, 1500, "POST Register"], "isController": false}, {"data": [0.01, 500, 1500, "POST buyer order"], "isController": false}, {"data": [0.0, 500, 1500, "GET buyer product"], "isController": false}, {"data": [0.0225, 500, 1500, "POST register buyer"], "isController": false}, {"data": [0.01, 500, 1500, "GET Buyer order"], "isController": false}, {"data": [0.015, 500, 1500, "DELETE seller product id"], "isController": false}, {"data": [0.01, 500, 1500, "GET Seller product"], "isController": false}, {"data": [0.0175, 500, 1500, "GET buyer order id"], "isController": false}, {"data": [0.0425, 500, 1500, "GET Seller product id"], "isController": false}, {"data": [0.075, 500, 1500, "POST login"], "isController": false}, {"data": [0.01, 500, 1500, "GET buyer product id"], "isController": false}, {"data": [0.05, 500, 1500, "POST login buyer"], "isController": false}, {"data": [0.01, 500, 1500, "PUT buyer order id"], "isController": false}, {"data": [0.0125, 500, 1500, "DELETE buyer order id"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 3000, 2637, 87.9, 5572.399333333329, 60, 468176, 302.0, 4729.000000000007, 20314.35, 98339.58999999655, 3.152293608829784, 634.4755626811256, 3.035141572132884], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["POST Seller product", 200, 166, 83.0, 4568.57, 74, 61067, 337.0, 9661.1, 35285.85, 60890.65, 0.23017793905578707, 0.08531644215685935, 1.9841563129752455], "isController": false}, {"data": ["POST Register", 200, 152, 76.0, 2577.3049999999985, 76, 60726, 308.0, 4648.900000000001, 17480.399999999918, 59930.92000000022, 0.22946147685995738, 0.08453997204585559, 0.3184203750031551], "isController": false}, {"data": ["POST buyer order", 200, 192, 96.0, 3278.3400000000024, 63, 60384, 285.5, 3280.9000000000033, 19080.79999999999, 60363.89, 0.23283510501445326, 0.07476758145154061, 0.06903765503907555], "isController": false}, {"data": ["GET buyer product", 200, 176, 88.0, 45242.145000000004, 62, 468176, 322.0, 163470.5000000002, 350509.5499999999, 466888.7300000002, 0.21716564092095605, 654.5936560249621, 0.04922916037791165], "isController": false}, {"data": ["POST register buyer", 200, 152, 76.0, 2747.3999999999996, 71, 60224, 340.0, 4895.500000000004, 16170.949999999933, 60047.35000000013, 0.2296662146070009, 0.08413095093870324, 0.3165670656925757], "isController": false}, {"data": ["GET Buyer order", 200, 191, 95.5, 3569.4850000000033, 62, 60845, 278.0, 2500.0000000000014, 42107.69999999973, 60638.0, 0.2328733308804009, 0.08090528925196429, 0.053352781046090286], "isController": false}, {"data": ["DELETE seller product id", 200, 194, 97.0, 1572.4899999999993, 63, 43968, 274.0, 1427.1000000000001, 15883.149999999881, 24487.690000000028, 0.23301332836238234, 0.07258911303476559, 0.05924545915276353], "isController": false}, {"data": ["GET Seller product", 200, 169, 84.5, 2477.5150000000003, 60, 60164, 336.5, 10464.2, 10716.0, 38971.11000000022, 0.23201183260346278, 0.08616158174066878, 0.053548512224123435], "isController": false}, {"data": ["GET buyer order id", 200, 190, 95.0, 1708.5850000000014, 67, 46304, 278.0, 1222.1000000000006, 6148.549999999982, 45677.65, 0.2329167229548747, 0.080949934113682, 0.05363567173474046], "isController": false}, {"data": ["GET Seller product id", 200, 169, 84.5, 1819.855, 63, 60264, 327.5, 2023.7000000000025, 7431.249999999989, 35809.56000000005, 0.2295879126555745, 0.08532643742122265, 0.053441967637287834], "isController": false}, {"data": ["POST login", 200, 156, 78.0, 2436.144999999999, 62, 60854, 328.5, 3125.8, 16781.149999999983, 46315.83, 0.2306650766154052, 0.08007614722717511, 0.06867466983177596], "isController": false}, {"data": ["GET buyer product id", 200, 186, 93.0, 5736.789999999996, 60, 121925, 299.0, 17055.20000000002, 50849.19999999999, 82466.87000000017, 0.23242463050294365, 0.08156765365301792, 0.053930912432277274], "isController": false}, {"data": ["POST login buyer", 200, 153, 76.5, 3256.8850000000025, 65, 60838, 331.0, 4538.900000000003, 34033.89999999984, 44459.30000000001, 0.22999556108567104, 0.07995377915768725, 0.06814966127403742], "isController": false}, {"data": ["PUT buyer order id", 200, 195, 97.5, 1491.86, 62, 60802, 279.0, 1461.9000000000003, 4496.649999999997, 33554.82000000011, 0.2329560609925559, 0.07461305088284524, 0.06479204194432117], "isController": false}, {"data": ["DELETE buyer order id", 200, 196, 98.0, 1102.6200000000001, 63, 34528, 265.5, 1374.9000000000003, 3557.299999999993, 17018.060000000012, 0.23299079802843187, 0.07271064880073812, 0.05865839129464832], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: org.apache.http.ConnectionClosedException/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 25,716,261; received: 138,758)", 1, 0.037921880925293895, 0.03333333333333333], "isController": false}, {"data": ["502/Bad Gateway", 2460, 93.28782707622298, 82.0], "isController": false}, {"data": ["504/Gateway Time-out", 21, 0.7963594994311718, 0.7], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.ConnectionClosedException/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 25,718,538; received: 17,009,406)", 1, 0.037921880925293895, 0.03333333333333333], "isController": false}, {"data": ["500/Internal Server Error", 9, 0.3412969283276451, 0.3], "isController": false}, {"data": ["403/Forbidden", 124, 4.702313234736443, 4.133333333333334], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.ConnectionClosedException/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 25,718,538; received: 138,758)", 1, 0.037921880925293895, 0.03333333333333333], "isController": false}, {"data": ["401/Unauthorized", 11, 0.41714069017823285, 0.36666666666666664], "isController": false}, {"data": ["404/Not Found", 8, 0.30337504740235116, 0.26666666666666666], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.ConnectionClosedException/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 25,720,815; received: 363,198)", 1, 0.037921880925293895, 0.03333333333333333], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 3000, 2637, "502/Bad Gateway", 2460, "403/Forbidden", 124, "504/Gateway Time-out", 21, "401/Unauthorized", 11, "500/Internal Server Error", 9], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["POST Seller product", 200, 166, "502/Bad Gateway", 152, "403/Forbidden", 10, "504/Gateway Time-out", 4, "", "", "", ""], "isController": false}, {"data": ["POST Register", 200, 152, "502/Bad Gateway", 150, "504/Gateway Time-out", 2, "", "", "", "", "", ""], "isController": false}, {"data": ["POST buyer order", 200, 192, "502/Bad Gateway", 177, "500/Internal Server Error", 9, "504/Gateway Time-out", 6, "", "", "", ""], "isController": false}, {"data": ["GET buyer product", 200, 176, "502/Bad Gateway", 169, "504/Gateway Time-out", 4, "Non HTTP response code: org.apache.http.ConnectionClosedException/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 25,716,261; received: 138,758)", 1, "Non HTTP response code: org.apache.http.ConnectionClosedException/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 25,718,538; received: 17,009,406)", 1, "Non HTTP response code: org.apache.http.ConnectionClosedException/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 25,718,538; received: 138,758)", 1], "isController": false}, {"data": ["POST register buyer", 200, 152, "502/Bad Gateway", 150, "504/Gateway Time-out", 2, "", "", "", "", "", ""], "isController": false}, {"data": ["GET Buyer order", 200, 191, "502/Bad Gateway", 182, "403/Forbidden", 9, "", "", "", "", "", ""], "isController": false}, {"data": ["DELETE seller product id", 200, 194, "502/Bad Gateway", 168, "403/Forbidden", 24, "404/Not Found", 2, "", "", "", ""], "isController": false}, {"data": ["GET Seller product", 200, 169, "502/Bad Gateway", 157, "403/Forbidden", 12, "", "", "", "", "", ""], "isController": false}, {"data": ["GET buyer order id", 200, 190, "502/Bad Gateway", 178, "403/Forbidden", 12, "", "", "", "", "", ""], "isController": false}, {"data": ["GET Seller product id", 200, 169, "502/Bad Gateway", 153, "403/Forbidden", 16, "", "", "", "", "", ""], "isController": false}, {"data": ["POST login", 200, 156, "502/Bad Gateway", 149, "401/Unauthorized", 6, "504/Gateway Time-out", 1, "", "", "", ""], "isController": false}, {"data": ["GET buyer product id", 200, 186, "502/Bad Gateway", 184, "504/Gateway Time-out", 1, "Non HTTP response code: org.apache.http.ConnectionClosedException/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 25,720,815; received: 363,198)", 1, "", "", "", ""], "isController": false}, {"data": ["POST login buyer", 200, 153, "502/Bad Gateway", 147, "401/Unauthorized", 5, "504/Gateway Time-out", 1, "", "", "", ""], "isController": false}, {"data": ["PUT buyer order id", 200, 195, "502/Bad Gateway", 173, "403/Forbidden", 19, "404/Not Found", 3, "", "", "", ""], "isController": false}, {"data": ["DELETE buyer order id", 200, 196, "502/Bad Gateway", 171, "403/Forbidden", 22, "404/Not Found", 3, "", "", "", ""], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
