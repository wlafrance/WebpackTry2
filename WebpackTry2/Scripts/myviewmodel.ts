import * as ko from "knockout";
import * as $ from "jquery";
import * as d3 from 'd3';
import * as jsPDF from 'jspdf';


class MyViewModel {
    firstname: KnockoutObservable<string>;
    lastname: KnockoutObservable<string>;

    constructor(firstname: string, lastname: string) {
        this.firstname = ko.observable(firstname);
        this.lastname = ko.observable(lastname);
       
    }
}

var jQueryItem = $('#jqueryTest').css("background", "red");
ko.applyBindings(new MyViewModel("Jakob", "Christensen"));

const square = d3.selectAll("rect");
square.style("fill", "orange");

// Default export is a4 paper, portrait, using milimeters for units
//var doc = new jsPDF();
//debugger;
