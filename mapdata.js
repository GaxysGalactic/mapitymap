var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#000000",
    popups: "detect",
    
    //State defaults
    state_description: "State Description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "#2041D4",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#000000",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    HI: {
      color: "#ffdaca",
      name: "Hawaii",
      description: "RATE: 1284 DEATHS: 2862"
    },
    AK: {
      color: "#ffb697",
      name: "Alaska",
      description: "RATE: 1457 DEATHS: 1013"
    },
    FL: {
      color: "#ffdaca",
      name: "Florida",
      description: "RATE: 1409 DEATHS: 49877"
    },
    NH: {
      color: "#ffb697",
      name: "New Hampshire",
      description: "RATE: 1475 DEATHS: 2951"
    },
    VT: {
      color: "#ff9264",
      name: "Vermont",
      description: "RATE: 1651 DEATHS: 1589"
    },
    ME: {
      color: "#ff6e31",
      name: "Maine",
      description: "RATE: 1671 DEATHS: 3592"
    },
    RI: {
      color: "#ffb697",
      name: "Rhode Island",
      description: "RATE: 1526 DEATHS: 2369"
    },
    NY: {
      color: "#ff9264",
      name: "New York",
      description: "RATE: 1592 DEATHS: 43237"
    },
    PA: {
      color: "#ff6e31",
      name: "Pennsylvania",
      description: "RATE: 1734 DEATHS: 32522"
    },
    NJ: {
      color: "#ffb697",
      name: "New Jersey",
      description: "RATE: 1528 DEATHS: 18707"
    },
    DE: {
      color: "#ff9264",
      name: "Delaware",
      description: "RATE: 1568 DEATHS: 2220"
    },
    MD: {
      color: "#ffb697",
      name: "Maryland",
      description: "RATE: 1558 DEATHS: 12086"
    },
    VA: {
      color: "#ff9264",
      name: "Virginia",
      description: "RATE: 1592 DEATHS: 16902"
    },
    WV: {
      color: "#fd4b00",
      name: "West Virginia",
      description: "RATE: 2095 DEATHS: 5399"
    },
    OH: {
      color: "#fd4b00",
      name: "Ohio",
      description: "RATE: 1939 DEATHS: 30041"
    },
    IN: {
      color: "#ffdaca",
      name: "Indiana",
      description: "RATE: 185 DEATHS: 15385"
    },
    IL: {
      color: "#ff6e31",
      name: "Illinois",
      description: "RATE: 1666 DEATHS: 26781"
    },
    CT: {
      color: "#ffdaca",
      name: "Connecticut",
      description: "RATE: 1378 DEATHS: 6899"
    },
    WI: {
      color: "#ff6e31",
      name: "Wisconsin",
      description: "RATE: 1666 DEATHS: 13128"
    },
    NC: {
      color: "#ff9264",
      name: "North Carolina",
      description: "RATE: 1658 DEATHS: 21763"
    },
    DC: {
      color: "#ff6e31",
      name: "District of Columbia",
      description: "RATE: 1826 DEATHS: 1239"
    },
    MA: {
      color: "#ffdaca",
      name: "Massachusetts",
      description: "RATE: 1323 DEATHS: 12427"
    },
    TN: {
      color: "#fd4b00",
      name: "Tennessee",
      description: "RATE: 2183 DEATHS: 18727"
    },
    AR: {
      color: "#fd4b00",
      name: "Arkansas",
      description: "RATE: 2241 DEATHS: 8664"
    },
    MO: {
      color: "#fd4b00",
      name: "Missouri",
      description: "RATE: 1998 DEATHS: 16143"
    },
    GA: {
      color: "#fd4b00",
      name: "Georgia",
      description: "RATE: 1839 DEATHS: 21728"
    },
    SC: {
      color: "#ff6e31",
      name: "South Carolina",
      description: "RATE: 1777 DEATHS: 12038"
    },
    KY: {
      color: "#fd4b00",
      name: "Kentucky",
      description: "RATE: 2086 DEATHS: 11654"
    },
    AL: {
      color: "#fd4b00",
      name: "Alabama",
      description: "RATE: 2342 DEATHS: 14958"
    },
    LA: {
      color: "#ffdaca",
      name: "Louisiana",
      description: "RATE: 224 DEATHS: 12284"
    },
    MS: {
      color: "#ffdaca",
      name: "Mississippi",
      description: "RATE: 248 DEATHS: 8858"
    },
    IA: {
      color: "#ff6e31",
      name: "Iowa",
      description: "RATE: 1768 DEATHS: 7786"
    },
    MN: {
      color: "#ffdaca",
      name: "Minnesota",
      description: "RATE: 1241 DEATHS: 9175"
    },
    OK: {
      color: "#fd4b00",
      name: "Oklahoma",
      description: "RATE: 2571 DEATHS: 12268"
    },
    TX: {
      color: "#ff6e31",
      name: "Texas",
      description: "RATE: 1723 DEATHS: 50672"
    },
    NM: {
      color: "#ff9264",
      name: "New Mexico",
      description: "RATE: 1568 DEATHS: 4369"
    },
    KS: {
      color: "#ff6e31",
      name: "Kansas",
      description: "RATE: 1732 DEATHS: 6440"
    },
    NE: {
      color: "#ffb697",
      name: "Nebraska",
      description: "RATE: 1543 DEATHS: 3804"
    },
    SD: {
      color: "#ff9264",
      name: "South Dakota",
      description: "RATE: 1582 DEATHS: 1850"
    },
    ND: {
      color: "#ffdaca",
      name: "North Dakota",
      description: "RATE: 155 DEATHS: 1538"
    },
    WY: {
      color: "#ff9264",
      name: "Wyoming",
      description: "RATE: 1571 DEATHS: 1150"
    },
    MT: {
      color: "#ff6e31",
      name: "Montana",
      description: "RATE: 1659 DEATHS: 2539"
    },
    CO: {
      color: "#ffdaca",
      name: "Colorado",
      description: "RATE: 1314 DEATHS: 8389"
    },
    UT: {
      color: "#ff9264",
      name: "Utah",
      description: "RATE: 1594 DEATHS: 4460"
    },
    AZ: {
      color: "#ffb697",
      name: "Arizona",
      description: "RATE: 1485 DEATHS: 14593"
    },
    NV: {
      color: "#fd4b00",
      name: "Nevada",
      description: "RATE: 1968 DEATHS: 7337"
    },
    OR: {
      color: "#ffb697",
      name: "Oregon",
      description: "RATE: 1454 DEATHS: 8152"
    },
    WA: {
      color: "#ffb697",
      name: "Washington",
      description: "RATE: 1427 DEATHS: 13218"
    },
    CA: {
      color: "#ffb697",
      name: "California",
      description: "RATE: 1424 DEATHS: 66340"
    },
    MI: {
      color: "#fd4b00",
      name: "Michigan",
      description: "RATE: 2063 DEATHS: 27266"
    },
    ID: {
      color: "#ff9264",
      name: "Idaho",
      description: "RATE: 1563 DEATHS: 3491"
    },
    GU: {
      hide: "yes",
      name: "Guam",
      description: " "
    },
    VI: {
      hide: "yes",
      name: "Virgin Islands",
      description: " "
    },
    PR: {
      hide: "yes",
      name: "Puerto Rico",
      description: " "
    },
    MP: {
      hide: "yes",
      name: "Northern Mariana Islands",
      description: " "
    },
    AS: {
      hide: "yes",
      name: "American Samoa",
      description: " "
    }
  },
  locations: {},
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  },
  legend: {
    entries: []
  },
  regions: {},
  data: {
    data: {
      AK: "1457",
      AL: "2342",
      FL: "1409",
      DE: "1568",
      CT: "1378",
      DC: "1826",
      AR: "2241",
      GA: "1839",
      CO: "1314",
      AZ: "1485",
      CA: "1424",
      HI: "1284",
      NH: "1475",
      ME: "1671",
      NY: "1592",
      NJ: "1528",
      MD: "1558",
      IN: "185",
      IL: "1666",
      NC: "1658",
      MA: "1323",
      MO: "1998",
      KY: "2086",
      LA: "224",
      MS: "248",
      IA: "1768",
      MN: "1241",
      NM: "1568",
      KS: "1732",
      NE: "1543",
      ND: "155",
      MT: "1659",
      NV: "1968",
      MI: "2063",
      ID: "1563",
      PA: "1734",
      OH: "1939",
      OK: "2571",
      OR: "1454",
      VT: "1651",
      RI: "1526",
      TN: "2183",
      SC: "1777",
      TX: "1723",
      SD: "1582",
      UT: "1594",
      VA: "1592",
      WV: "2095",
      WI: "1666",
      WY: "1571",
      WA: "1427"
    }
  }
};