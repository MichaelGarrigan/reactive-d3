// data from:
// https://www.best-selling-cars.com/usa/2018-full-year-usa-ford-sales-americas-favorite-car-brand/

export const fordHierarchy = {
  "name": "Ford",
  "yearDiff": -3.3,
  "children": [
    {
      "name": "Cars",
      "yearDiff": -17.7,
      "children": [
        {
          "name": "Fiesta",
          "2017": 46249,
          "2018": 51730,
          "yearDiff": 11.9
        },
        {
          "name": "Focus",
          "2017": 158385,
          "2018": 113345,
          "yearDiff": -28.4
        },
        {
          "name": "C-MAX",
          "2017": 18390,
          "2018": 6683,
          "yearDiff": -63.7
        },
        {
          "name": "Fusion",
          "2017": 209623,
          "2018": 173600,
          "yearDiff": -17.2
        },
        {
          "name": "Taurus",
          "2017": 33242,
          "2018": 28706,
          "yearDiff": -13.6
        },
        {
          "name": "Police Sedan",
          "2017": 7994,
          "2018": 7382,
          "yearDiff": -7.7
        },
        {
          "name": "GT",
          "2017": 89,
          "2018": 126,
          "yearDiff": 41.6
        },
        {
          "name": "Mustang",
          "2017": 81866,
          "2018": 75842,
          "yearDiff": -7.4
        }
      ]
    },
    {
      "name": "SUVs",
      "yearDiff": 0.1,
      "children": [
        {
          "name": "EcoSport",
          "2017": 0,
          "2018": 54348,
          "yearDiff": null
        },
        {
          "name": "Escape",
          "2017": 308296,
          "2018": 272228,
          "yearDiff": -11.7
        },
        {
          "name": "Edge",
          "2017": 142603,
          "2018": 134122,
          "yearDiff": -5.9
        },
        {
          "name": "Flex",
          "2017": 22389,
          "2018": 20308,
          "yearDiff": -9.3
        },
        {
          "name": "Explorer",
          "2017": 238056,
          "2018": 227732,
          "yearDiff": -4.3
        },
        {
          "name": "Police Utility",
          "2017": 33075,
          "2018": 33839,
          "yearDiff": 2.3
        },
        {
          "name": "Expedition",
          "2017": 51883,
          "2018": 54661,
          "yearDiff": 5.4
        }
      ]
    },
    {
      "name": "Trucks",
      "yearDiff": 1.4,
      "children": [
        {
          "name": "F-Series",
          "2017": 896764,
          "2018": 909330,
          "yearDiff": 1.4
        },
        {
          "name": "E-Series",
          "2017": 53304,
          "2018": 47936,
          "yearDiff": -10.1
        },
        {
          "name": "Transit",
          "2017": 127360,
          "2018": 137794,
          "yearDiff": 8.2
        },
        {
          "name": "Transit Connect",
          "2017": 34473,
          "2018": 31923,
          "yearDiff": -7.4
        },
        {
          "name": "Heavy",
          "2017": 11515,
          "2018": 12096,
          "yearDiff": 5
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

// export const fordHierarchy = {
//   "name": "Ford",
//   "2017": 2475556,
//   "2018": 2393731,
//   "yearDiff": -3.3,
//   "children": [
//     {
//       "name": "Cars",
//       "2017": 555838,
//       "2018": 457414,
//       "yearDiff": -17.7,
//       "children": [
//         {
//           "name": "Fiesta",
//           "2017": 46249,
//           "2018": 51730,
//           "yearDiff": 11.9
//         },
//         {
//           "name": "Focus",
//           "2017": 158385,
//           "2018": 113345,
//           "yearDiff": -28.4
//         },
//         {
//           "name": "C-MAX",
//           "2017": 18390,
//           "2018": 6683,
//           "yearDiff": -63.7
//         },
//         {
//           "name": "Fusion",
//           "2017": 209623,
//           "2018": 173600,
//           "yearDiff": -17.2
//         },
//         {
//           "name": "Taurus",
//           "2017": 33242,
//           "2018": 28706,
//           "yearDiff": -13.6
//         },
//         {
//           "name": "Police Sedan",
//           "2017": 7994,
//           "2018": 7382,
//           "yearDiff": -7.7
//         },
//         {
//           "name": "GT",
//           "2017": 89,
//           "2018": 126,
//           "yearDiff": 41.6
//         },
//         {
//           "name": "Mustang",
//           "2017": 81866,
//           "2018": 75842,
//           "yearDiff": -7.4
//         }
//       ]
//     },
//     {
//       "name": "SUVs",
//       "2017": 796302,
//       "2018": 797238,
//       "yearDiff": 0.1,
//       "children": [
//         {
//           "name": "EcoSport",
//           "2017": 0,
//           "2018": 54348,
//           "yearDiff": null
//         },
//         {
//           "name": "Escape",
//           "2017": 308296,
//           "2018": 272228,
//           "yearDiff": -11.7
//         },
//         {
//           "name": "Edge",
//           "2017": 142603,
//           "2018": 134122,
//           "yearDiff": -5.9
//         },
//         {
//           "name": "Flex",
//           "2017": 22389,
//           "2018": 20308,
//           "yearDiff": -9.3
//         },
//         {
//           "name": "Explorer",
//           "2017": 238056,
//           "2018": 227732,
//           "yearDiff": -4.3
//         },
//         {
//           "name": "Police Utility",
//           "2017": 33075,
//           "2018": 33839,
//           "yearDiff": 2.3
//         },
//         {
//           "name": "Expedition",
//           "2017": 51883,
//           "2018": 54661,
//           "yearDiff": 5.4
//         }
//       ]
//     },
//     {
//       "name": "Trucks",
//       "2017": 1123416,
//       "2018": 1139079,
//       "yearDiff": 1.4,
//       "children": [
//         {
//           "name": "F-Series",
//           "2017": 896764,
//           "2018": 909330,
//           "yearDiff": 1.4
//         },
//         {
//           "name": "E-Series",
//           "2017": 53304,
//           "2018": 47936,
//           "yearDiff": -10.1
//         },
//         {
//           "name": "Transit",
//           "2017": 127360,
//           "2018": 137794,
//           "yearDiff": 8.2
//         },
//         {
//           "name": "Transit Connect",
//           "2017": 34473,
//           "2018": 31923,
//           "yearDiff": -7.4
//         },
//         {
//           "name": "Heavy",
//           "2017": 11515,
//           "2018": 12096,
//           "yearDiff": 5
//         }
//       ]
//     }
//   ]
// }
