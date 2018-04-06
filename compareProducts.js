
///////////////////////////////
//objects that table will be built from
var featureIcons = {
  multipanel_airflow: {
    url: "https://www.swissgear.com/media/attricons/airflow-back-panel.svg",
		label: "Airflow back panel"
  },
  headphone_port: {
    url: "https://www.swissgear.com/media/attricons/headphone-cord-port.svg",
		label: "Headphone Port"
  },
  scan_smart: {
    url: "https://www.swissgear.com/media/attricons/scan-smart.svg",
		label: "Lay flat technology"
  },
  water_pocket: {
    url: "https://www.swissgear.com/media/attricons/water-bottle-pocket.svg",
		label: "Side Pockets"
  },
  contoured_suspension: {
    url: "https://www.swissgear.com/media/attricons/contoured-suspension.svg",
		label: "Padded straps"
  },
  tablet_friendly: {
    url: "https://www.swissgear.com/media/attricons/tablet-friendly.svg",
		label: "Tablet safe sleeve"
  },
	multi_compartments: {
		url: "https://www.swissgear.com/media/attricons/organizer-panel.svg",
		label: "Multiple Compartments"
	},
	accessories_pocket: {
		url: "https://www.swissgear.com/media/attricons/crush-resistant-pocket.svg",
		label: "Accessories Pocket"
	},
	add_bag_panel: {
		url: "https://www.swissgear.com/media/attricons/add-a-bag.svg",
		label: "Add a bag panel strap"
	},
	insulated_pockets: {
		url: "https://www.swissgear.com/swissgear-5358-scansmart",
		label: "Insulated Pockets"
	},
	usb_port: {
		url: "https://www.swissgear.com/media/attricons/built-in-usb-outlet.svg",
		label: "USB Port"
	}
}

var comparisonProducts = {
  scanSmart_6677: {
    productName: "SWISSGEAR 6677 ScanSmart TSA Laptop Backpack",
    productPrice: "$85.00",
    productLink: "https://www.swissgear.com/swissgear-6677-scansmart-tsa-laptop-backpack",
		img: "https://www.swissgear.com/media/catalog/product/cache/1/small_image/125x125/9df78eab33525d08d6e5fb8d27136e95/s/w/swissgear-6677-scansmart-laptop-backpack-black-front-ref.jpg",
    rating: "4.8",
    weight: "3.05",
    laptopCompartment: "17",
    icons: [
			[featureIcons.headphone_port.url, featureIcons.headphone_port.label],
      [featureIcons.multipanel_airflow.url, featureIcons.multipanel_airflow.label],
			[featureIcons.tablet_friendly.url, featureIcons.tablet_friendly.label],
      [featureIcons.scan_smart.url, featureIcons.scan_smart.label],
			[featureIcons.contoured_suspension.url, featureIcons.contoured_suspension.label],
      [featureIcons.water_pocket.url, featureIcons.water_pocket.label]
    ]
  },
	scanSmart_6752: {
		productName: "SWISSGEAR 6752 ScanSmart TSA Laptop Backpack",
		productPrice: "85.00",
		productLink: "https://www.swissgear.com/swissgear-6752-scansmart-tsa-laptop-backpack",
		img: "https://www.swissgear.com/media/catalog/product/cache/1/small_image/125x125/9df78eab33525d08d6e5fb8d27136e95/s/a/sa6752.i_noir_satin_front_refl_1.jpg",
		rating: "4.6",
		weight: "3.00",
		laptopCompartment: "15",
		icons: [
			[featureIcons.multipanel_airflow.url, featureIcons.multipanel_airflow.label],
			[featureIcons.scan_smart.url, featureIcons.scan_smart.label],
			[featureIcons.tablet_friendly.url, featureIcons.tablet_friendly.label],
			[featureIcons.multi_compartments.url, featureIcons.multi_compartments.label],
			[featureIcons.contoured_suspension.url, featureIcons.contoured_suspension.label],
			[featureIcons.accessories_pocket.url, featureIcons.accessories_pocket.label],
      [featureIcons.water_pocket.url, featureIcons.water_pocket.label]
		]
	},
	scanSmart_5709: {
		productName: "SWISSGEAR 5709 ScanSmart - Black",
		productPrice: "110.00",
		productLink: "https://www.swissgear.com/swissgear-18-5-scansmart-black",
		img: "https://www.swissgear.com/media/catalog/product/cache/1/small_image/125x125/9df78eab33525d08d6e5fb8d27136e95/s/a/sa5709_black_front_refl.jpg",
		rating: "4.5",
		weight: "2.90",
		laptopCompartment: "15",
		icons: [
			[featureIcons.add_bag_panel.url, featureIcons.add_bag_panel.label],
			[featureIcons.multipanel_airflow.url, featureIcons.multipanel_airflow.label],
			[featureIcons.scan_smart.url, featureIcons.scan_smart.label],
			[featureIcons.tablet_friendly.url, featureIcons.tablet_friendly.label],
			[featureIcons.multi_compartments.url, featureIcons.multi_compartments.label],
			[featureIcons.contoured_suspension.url, featureIcons.contoured_suspension.label],
			[featureIcons.accessories_pocket.url, featureIcons.accessories_pocket.label],
      [featureIcons.water_pocket.url, featureIcons.water_pocket.label]
		]
	},
	scanSmart_5358: {
		productName: "SWISSGEAR 5358 ScanSmart",
		productPrice: "120.00",
		productLink: "https://www.swissgear.com/swissgear-5358-scansmart",
		img: "https://www.swissgear.com/media/catalog/product/cache/1/small_image/125x125/9df78eab33525d08d6e5fb8d27136e95/s/a/sa5358.c_black_front_refl_4.jpg",
		rating: "4.6",
		weight: "2.95",
		laptopCompartment: "15",
		icons: [
			[featureIcons.insulated_pockets.url, featureIcons.insulated_pockets.label],
			[featureIcons.usb_port.url, featureIcons.usb_port.label],
			[featureIcons.multipanel_airflow.url, featureIcons.multipanel_airflow.label],
			[featureIcons.scan_smart.url, featureIcons.scan_smart.label],
			[featureIcons.tablet_friendly.url, featureIcons.tablet_friendly.label],
			[featureIcons.contoured_suspension.url, featureIcons.contoured_suspension.label],
			[featureIcons.accessories_pocket.url, featureIcons.accessories_pocket.label],
      [featureIcons.water_pocket.url, featureIcons.water_pocket.label]
		]
	},

}

///////////////////////////////
//business logic

function buildTable(){};

function buildColumns(num, width) {
	var columns = '<col width= "1">';
	for (var i = 0; i < num; i++)  columns += '<col width="' + width +'">';
	var html = '<colgroup>'+ columns + '<colgroup>';
	return html;
}

function buildTbody(rows) {
	var html = '<tbody>' + rows + '</tbody>';
	return html;
}

function buildRow(classNames, cells, th) {
	if (th != null) {
		var tableHeader = 	'<th><div class="compare-item-header">' + th + '</div></th>';
		var html = 	'<tr class="' + classNames + '">' + tableHeader + cells + '</tr>';
	} else {
		var html = 	'<tr class="' + classNames + '">' + cells + '</tr>';
	}
	return html;
}

function buildPriceCells(link, img, name, price) {

	var html = 	'<td>' +
	'<a class="product-image" href="' + link +'" title="' + name +'"><img src="' + img +'" alt="' + name +'"></a>' +
	'<h2 class="product-name"><a href="' + link +'" title="' + name + '">' + name + '</a></h2>' +
	'<div class="price-box">' +
	'<span class="regular-price"><span class="price">$' + price + '</span></span>' +
	'</div>' +
	'</td>';
	return html;
}


///////////////////////////////
//front-end logic

// go through each product object in the comparisonProducts object to build table cells
for (var product in comparisonProducts) {
	if (!comparisonProducts.hasOwnProperty(product)) continue;

	var obj = comparisonProducts[product];
	priceCells = buildPriceCells(obj.productLink, obj.img, obj.productName, obj.productPrice);
	// for (var prop in obj) {
	// 	//skip loop if the property is from prototype
	// 	if(!obj.hasOwnProperty(prop)) continue;
	//
	// 	console.log(prop + " = " + obj[prop] );
	// }
}

// create the first row in the table
var priceCells;
var priceRow = buildRow("product-shop-row top first odd", priceCells, "Price");
var priceBody = buildTbody(priceRow);
console.log(priceBody);
