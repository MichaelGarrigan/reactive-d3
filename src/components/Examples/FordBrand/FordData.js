// data from:
// https://www.best-selling-cars.com/usa/2018-full-year-usa-ford-sales-americas-favorite-car-brand/

export default {
  name: "Ford",
  "2017_total": 2475556,
  "2018_total": 2393731,
  "2017_rounded": "2.47 M",
  "2018_rounded": "2.39 M",
  yearDiff: -3.3,
  "children": [
    {
      name: "Cars",
      "2017_total": 555838,
      "2018_total": 457414,
      "2017_rounded": "555 K",
      "2018_rounded": "457 K",
      yearDiff: -17.7,
      "children": [
        {
          name: "Fiesta",
          "2017": 46249,
          "2018": 51730,
          "2017_rounded": "46 K",
          "2018_rounded": "52 K",
          yearDiff: 11.9
        },
        {
          name: "Focus",
          "2017": 158385,
          "2018": 113345,
          "2017_rounded": "158 K",
          "2018_rounded": "113 K",
          yearDiff: -28.4
        },
        {
          name: "C-MAX",
          "2017": 18390,
          "2018": 6683,
          "2017_rounded": "18 K",
          "2018_rounded": "7 K",
          yearDiff: -63.7
        },
        {
          name: "Fusion",
          "2017": 209623,
          "2018": 173600,
          "2017_rounded": "210 K",
          "2018_rounded": "174 K",
          yearDiff: -17.2
        },
        {
          name: "Taurus",
          "2017": 33242,
          "2018": 28706,
          "2017_rounded": "33 K",
          "2018_rounded": "29 K",
          yearDiff: -13.6
        },
        {
          name: "Police Sedan",
          "2017": 7994,
          "2018": 7382,
          "2017_rounded": "8 K",
          "2018_rounded": "7 K",
          yearDiff: -7.7
        },
        {
          name: "GT",
          "2017": 89,
          "2018": 126,
          "2017_rounded": "89 units",
          "2018_rounded": "126 units",
          yearDiff: 41.6
        },
        {
          name: "Mustang",
          "2017": 81866,
          "2018": 75842,
          "2017_rounded": "82 K",
          "2018_rounded": "76 K",
          yearDiff: -7.4
        }
      ]
    },
    {
      name: "SUVs",
      "2017_total": 796302,
      "2018_total": 797238,
      "2017_rounded": "796 K",
      "2018_rounded": "797 K",
      yearDiff: 0.1,
      "children": [
        {
          name: "EcoSport",
          "2017": 0,
          "2018": 54348,
          "2017_rounded": "0 K",
          "2018_rounded": "54 K",
          yearDiff: 100
        },
        {
          name: "Escape",
          "2017": 308296,
          "2018": 272228,
          "2017_rounded": "308 K",
          "2018_rounded": "272 K",
          yearDiff: -11.7
        },
        {
          name: "Edge",
          "2017": 142603,
          "2018": 134122,
          "2017_rounded": "142 K",
          "2018_rounded": "134 K",
          yearDiff: -5.9
        },
        {
          name: "Flex",
          "2017": 22389,
          "2018": 20308,
          "2017_rounded": "22 K",
          "2018_rounded": "20 K",
          yearDiff: -9.3
        },
        {
          name: "Explorer",
          "2017": 238056,
          "2018": 227732,
          "2017_rounded": "238 K",
          "2018_rounded": "228 K",
          yearDiff: -4.3
        },
        {
          name: "Police Utility",
          "2017": 33075,
          "2018": 33839,
          "2017_rounded": "33 K",
          "2018_rounded": "34 K",
          yearDiff: 2.3
        },
        {
          name: "Expedition",
          "2017": 51883,
          "2018": 54661,
          "2017_rounded": "52 K",
          "2018_rounded": "55 K",
          yearDiff: 5.4
        }
      ]
    },
    {
      name: "Trucks",
      "2017_total": 1123416,
      "2018_total": 1139079,
      "2017_rounded": "1.12 M",
      "2018_rounded": "1.13 M",
      yearDiff: 1.4,
      "children": [
        {
          name: "F-Series",
          "2017": 896764,
          "2018": 909330,
          "2017_rounded": "897 K",
          "2018_rounded": "909 K",
          yearDiff: 1.4
        },
        {
          name: "E-Series",
          "2017": 53304,
          "2018": 47936,
          "2017_rounded": "53 K",
          "2018_rounded": "48 K",
          yearDiff: -10.1
        },
        {
          name: "Transit",
          "2017": 127360,
          "2018": 137794,
          "2017_rounded": "127 K",
          "2018_rounded": "138 K",
          yearDiff: 8.2
        },
        {
          name: "Transit Connect",
          "2017": 34473,
          "2018": 31923,
          "2017_rounded": "34 K",
          "2018_rounded": "32 K",
          yearDiff: -7.4
        },
        {
          name: "Heavy",
          "2017": 11515,
          "2018": 12096,
          "2017_rounded": "11 K",
          "2018_rounded": "12 K",
          yearDiff: 5
        }
      ]
    }
  ]
}

// BRAND|'2018'|'2017'|Change

// Fiesta|51730|46249|11.9
// Focus|113345|158385|-28.4
// C-MAX|6683|18390|-63.7
// Fusion|173600|209623|-17.2
// Taurus|28706|33242|-13.6
// Police Sedan|7382|7994|-7.7
// GT|126|89|41.6
// Mustang|75842|81,866|-7.4
// Cars|457414|555838|-17.7

// EcoSport|54348|0|null
// Escape|272228|308296|-11.7
// Edge|134122|142603|-5.9
// Flex|	20308|22389|-9.3
// Explorer|227732|238056|-4.3
// Police Utility|33839|33075|2.3
// Expedition|54661|51883|5.4
// SUVs|797238|796302|0.1

// F-Series|909330|896764|1.4
// E-Series|47936|53304|-10.1
// Transit|137794|127360|8.2
// Transit Connect|31923|34473|-7.4
// Heavy|12096|11515|5
// Trucks|1139079|1123416|1.4

// Ford|2393731|2475556|-3.3

// data from:
// https://www.best-selling-cars.com/usa/2018-full-year-usa-ford-sales-americas-favorite-car-brand/