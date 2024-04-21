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

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.3751785714285714, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.5, 500, 1500, "DELETE product"], "isController": false}, {"data": [0.3525, 500, 1500, "POST product"], "isController": false}, {"data": [0.21, 500, 1500, "POST login "], "isController": false}, {"data": [0.4675, 500, 1500, "POST offers"], "isController": false}, {"data": [0.4225, 500, 1500, "GET product"], "isController": false}, {"data": [0.3975, 500, 1500, "GET profiles"], "isController": false}, {"data": [0.4825, 500, 1500, "GET product id"], "isController": false}, {"data": [0.0, 500, 1500, "PUT profiles"], "isController": false}, {"data": [0.5525, 500, 1500, "GET categories id"], "isController": false}, {"data": [0.53, 500, 1500, "PUT offers id"], "isController": false}, {"data": [0.2325, 500, 1500, "POST register"], "isController": false}, {"data": [0.52, 500, 1500, "GET user id offers"], "isController": false}, {"data": [0.055, 500, 1500, "PUT product"], "isController": false}, {"data": [0.53, 500, 1500, "GET categories"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 2800, 0, 0.0, 1376.2242857142812, 83, 8165, 1175.0, 2373.8, 2987.8499999999995, 5135.799999999996, 14.243057781033334, 34.16697048412408, 462.54874591147944], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["DELETE product", 200, 0, 0.0, 922.8950000000002, 83, 1912, 865.5, 1389.0, 1518.8, 1846.7900000000002, 1.1380448389666553, 0.9780406246443609, 0.7701807357459883], "isController": false}, {"data": ["POST product", 200, 0, 0.0, 1312.9049999999984, 587, 2515, 1313.5, 1750.3, 1926.8999999999992, 2345.740000000002, 1.1158597141167412, 2.2615392535037993, 3.152260104109711], "isController": false}, {"data": ["POST login ", 200, 0, 0.0, 1755.4150000000002, 706, 3317, 1588.0, 2996.6000000000017, 3246.3999999999996, 3306.91, 1.0755521615909567, 1.8528119050852108, 0.5350451866351889], "isController": false}, {"data": ["POST offers", 200, 0, 0.0, 1055.6699999999998, 152, 2168, 1025.0, 1459.1000000000001, 1631.9, 2117.4000000000015, 1.1299818072929027, 3.151027100494932, 0.8585213340565216], "isController": false}, {"data": ["GET product", 200, 0, 0.0, 1173.5700000000002, 137, 2281, 1181.0, 1589.9, 1754.55, 2161.87, 1.1245874169913914, 14.183370084498687, 0.4579618680521584], "isController": false}, {"data": ["GET profiles", 200, 0, 0.0, 1239.0100000000002, 281, 3634, 1124.5, 1898.1000000000001, 2475.7999999999993, 3567.7700000000004, 1.0981287885443205, 1.467181563241237, 0.7131402777167707], "isController": false}, {"data": ["GET product id", 200, 0, 0.0, 1012.7100000000004, 107, 2249, 991.5, 1519.4, 1669.6999999999998, 2163.4700000000003, 1.1279043537108053, 1.7472934701387324, 0.46592142736295966], "isController": false}, {"data": ["PUT profiles", 200, 0, 0.0, 2774.395000000001, 1672, 5686, 2586.0, 3683.8, 4345.749999999998, 5426.930000000004, 1.081262265568825, 1.4443720974866059, 161.10420234268986], "isController": false}, {"data": ["GET categories id", 200, 0, 0.0, 853.8600000000004, 179, 2367, 861.0, 1283.0, 1448.1999999999991, 2164.6900000000005, 1.1190313664492015, 0.7966541661537773, 0.4600705129639784], "isController": false}, {"data": ["PUT offers id", 200, 0, 0.0, 904.575, 99, 2268, 876.5, 1330.8, 1459.35, 1616.8000000000002, 1.1357763883446625, 3.158933537915055, 0.818557592381212], "isController": false}, {"data": ["POST register", 200, 0, 0.0, 1933.1800000000005, 718, 6525, 1552.5, 3903.3000000000075, 5246.499999999999, 6408.600000000001, 1.0559773598454048, 1.8173844727769037, 0.5428383615455284], "isController": false}, {"data": ["GET user id offers", 200, 0, 0.0, 886.755, 95, 1779, 858.0, 1293.0, 1399.95, 1709.7000000000003, 1.1328492290960994, 1.2483024962332763, 0.7467512008201829], "isController": false}, {"data": ["PUT product", 200, 0, 0.0, 2518.0350000000003, 991, 8165, 2065.0, 4682.4, 5511.549999999997, 7626.090000000009, 1.1125636247322894, 2.21662004909187, 330.1154349949935], "isController": false}, {"data": ["GET categories", 200, 0, 0.0, 924.1649999999995, 177, 2147, 900.5, 1402.7, 1595.0499999999997, 1937.950000000001, 1.1136291503566398, 1.163655459845317, 0.4556744277338204], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 2800, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
