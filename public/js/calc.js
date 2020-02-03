var typingTimer;                //timer identifier
var doneTypingInterval = 2000;  //time in ms, 5 second for example

$(document).ready(function() {
    $('#intendedTrasferAmount').keyup(function () {
        clearTimeout(typingTimer);
        if ($('#intendedTrasferAmount').val()) {
            typingTimer = setTimeout(updateAmount, doneTypingInterval);
        }
    });
   $('#intendedTrasferAmount').val('1000');

    updateAmount();

    $('[data-toggle="popover"]').popover({
            trigger: 'hover click focus',
            container: 'body'
        });
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'bottom'
    });


    if (Modernizr.touch) {
        $( "body" ).addClass( "touch" );
    }
});

function updateAmount() {
   var intendedAmount = $("#intendedTrasferAmount").val();
    var panels = $("[name='company']");
    panels.each(function update() {
        var p =$(this);
       var cAmount =parseFloat (p.find("[name='fxRate']").text());
       var totalAmount = intendedAmount * cAmount;
        var totalAmount = totalAmount.toFixed(2);
        p.find("div[name=transferAmount] h2").text(totalAmount);

        var cId = p.find("[name='companyId']").val();
        var cost = getChargesForIntendedAmount(cId.toLowerCase(),intendedAmount);
        p.find("div[name='transferCost'] b").text(cost);
    });
}

function getChargesForIntendedAmount(company,amount) {
    var ratesMap = getRates();
    var rates = ratesMap[company];
    for( rate in rates) {
        var vals = rates[rate][0].split("-");
        if(isNaN(parseInt(vals[1]))) {
            if(company.trim() == "transferwise"){
                return 0.009*amount;
            }
            return rates[rate][1];
        }
        else if((parseInt(vals[0],10) <= parseInt(amount,10)) &&
            (parseInt(vals[1],10) >= parseInt(amount,10)) ) {
            return rates[rate][1];
        }
    }
    return "N/A";
}

function getRates() {
    var rates = new Object();
    var xooomRates = [["0-500",2.99],["501-1000",4.99],["1001-X",0]];
    rates["xoom"] = xooomRates;
    var remitlyRates = [["0-999",3.99],["1000-X",0]];
    rates["remitly"] = remitlyRates;
    var remit2indiaRates = [["0-500",3.00],["501-999",5.00],["1001-X",0]];
    rates["remit2india"] = remit2indiaRates;
    var iciciRates = [["0-999",3.00],["1000-X",0]];
    rates["icici"] = iciciRates;
    var wuRates = [["0-1000",4.00],["1000-X",0]];
    rates["western"] = wuRates;
    var axisRates = [["0-X",0]];
    rates["axis"] = axisRates;
    var transfastRates = [["0-X",0]];
    rates["transfast"] = transfastRates;
    var transferWise = [["0-300",2.70],["301-X",0]];
    rates["transferwise"] = transferWise;
   return rates;
}
