! function() {
    "use strict";
    angular.module("stockgo.system", ["ui.router", "toastr"]).factory("Data", ["$http", "$location", function(e, o, a) {
        let n = "https://stockgo.com/stockgo_api/v1/",
            s = {};
        return s.get = function(o) {
            return e.get(n + o).then(function(e) {
                return e.data
            })
        }, s.post = function(o, a) {
            return e.post(n + o, a).then(function(e) {
                return JSONH.unpack(e.data)
            })
        }, s.postt = function(o, a) {
            return e.post(n + o, a).then(function(e) {
                return e.data
            })
        }, s.put = function(o, a) {
            return e.put(n + o, a).then(function(e) {
                return e.data
            })
        }, s["delete"] = function(o) {
            return e["delete"](n + o).then(function(e) {
                return e.data
            })
        }, s
    }]).filter("currentdate", ["$filter", function(e) {
        return function() {
            return e("date")(new Date, "yyyy-MM-dd")
        }
    }])
}(),
function() {
    "use strict";

    function e() {
        function e(e, o, a, n, s) {
            a.logout = function() {
                e.ClearCredentials(), window.location.href = "/"
            }
        }
        e.$inject = ["AuthenticationService", "Data", "$rootScope", "toastr", "$translate"];
        let o = {
            restrict: "E",
            templateUrl: "app/components/navbar/navbar.html",
            controller: e,
            controllerAs: "vmn",
            bindToController: !0
        };
        return o
    }
    angular.module("stockgo.system").directive("navbar", e)
}(),
function() {
    "use strict";

    function e(e, o, a, n, s, i) {
        function c() {
            h.signin = !0, h.verify = !1, h.resend = !1, h.country = {
                name: "United States",
                code: "US",
                phone_code: "+1"
            }
        }

        function d() {
            h.showCountryList = !0, setTimeout(function() {
                document.getElementById("searchcountry").focus()
            }, 100)
        }

        function t(o, n) {
            if (n)
                if (isNaN(n)) a.error("Please enter a valid mobile number.");
                else {
                    let s = o.phone_code + n;
                    h.mobile = s.substr(1), e.postt("startstockgo/" + h.mobile + "/" + o.phone_code.substr(1)).then(function(e) {
                        "yes" == e.verify ? (a.success(e.message), window.location = "https://" + h.mobile + ".stockgo.com") : "no" == e.verify && (h.signin = !1, h.verify = !0, a.success(e.message), setTimeout(function() {
                            h.resend = !0
                        }, 3e4))
                    })
                }
            else a.error("Please enter your mobile number.")
        }

        function r() {
            c(), h.mobileno = null, h.mobile = null, h.code = null
        }

        function l(o) {
            o ? isNaN(o) || 6 != o.length ? a.error("Please enter a valid mobile number.") : (h.mobile.id, e.postt("verifycode/" + h.mobile + "/" + o).then(function(e) {
                "success" == e.status ? (a.success(e.message), window.location = "https://" + h.mobile + ".stockgo.com/admin/#/login/" + e.userId, r(), h.signin = !1) : a.info(e.message)
            })) : a.error("Please enter your verification code.")
        }

        function p() {
            e.postt("verifyagain/" + h.mobile).then(function(e) {
                "success" == e.status ? a.success("Code successfully send to " + h.mobile) : a.error("Failed to send code. Try Again")
            })
        }
        let h = this;
        h.showCountryList = !1, h.startTrial = t, h.cancelVerification = r, h.verifyCode = l, h.selectCountry = d, h.resendcodeagain = p, c(), e.post("getCountryCode").then(function(e) {}), o.view = {}, o.word = {}, o.word.skill = ["Ecommerce", "Wholesaler", "Retailer"];
        let m = 0,
            f = 0,
            u = !0;
        n(function() {
            let e = o.word.skill[m],
                a = e.length;
            u && (o.view.type = e.slice(0, f), f++), f === a + 1 && (u = !1), u || (o.view.type = e.slice(0, f), f--), 0 === f && (u = !0, m++), m === o.word.skill.length && (m = 0)
        }, 500), o.goToTop = function() {
            window.scrollTo(0, 0)
        }, h.worldCountryList = [{
            name: "Afghanistan",
            code: "AF",
            phone_code: "+93"
        }, {
            name: "Aland Islands",
            code: "AX",
            phone_code: "+358"
        }, {
            name: "Albania",
            code: "AL",
            phone_code: "+355"
        }, {
            name: "Algeria",
            code: "DZ",
            phone_code: "+213"
        }, {
            name: "American Samoa",
            code: "AS",
            phone_code: "+1"
        }, {
            name: "Andorra",
            code: "AD",
            phone_code: "+376"
        }, {
            name: "Angola",
            code: "AO",
            phone_code: "+244"
        }, {
            name: "Anguilla",
            code: "AI",
            phone_code: "+1"
        }, {
            name: "Antigua and Barbuda",
            code: "AG",
            phone_code: "+1"
        }, {
            name: "Argentina",
            code: "AR",
            phone_code: "+54"
        }, {
            name: "Armenia",
            code: "AM",
            phone_code: "+374"
        }, {
            name: "Aruba",
            code: "AW",
            phone_code: "+297"
        }, {
            name: "Ascension Island",
            code: "AC",
            phone_code: "+247"
        }, {
            name: "Australia",
            code: "AU",
            phone_code: "+61"
        }, {
            name: "Austria",
            code: "AI",
            phone_code: "+43"
        }, {
            name: "Azerbaijan",
            code: "AZ",
            phone_code: "+994"
        }, {
            name: "Bahamas",
            code: "BS",
            phone_code: "+1"
        }, {
            name: "Bahrain",
            code: "BH",
            phone_code: "+973"
        }, {
            name: "Bangladesh",
            code: "BD",
            phone_code: "+880"
        }, {
            name: "Barbados",
            code: "BB",
            phone_code: "+1"
        }, {
            name: "Belarus",
            code: "BY",
            phone_code: "+375"
        }, {
            name: "Belgium",
            code: "BE",
            phone_code: "+32"
        }, {
            name: "Belize",
            code: "BZ",
            phone_code: "+501"
        }, {
            name: "Benin",
            code: "BJ",
            phone_code: "+229"
        }, {
            name: "Bermuda",
            code: "BM",
            phone_code: "+1"
        }, {
            name: "Bhutan",
            code: "BT",
            phone_code: "+975"
        }, {
            name: "Bolivia",
            code: "BO",
            phone_code: "+591"
        }, {
            name: "Bosnia and Herzegovina",
            code: "BA",
            phone_code: "+387"
        }, {
            name: "Botswana",
            code: "BW",
            phone_code: "+267"
        }, {
            name: "Brazil",
            code: "BR",
            phone_code: "+55"
        }, {
            name: "British Indian Ocean Territory",
            code: "IO",
            phone_code: "+246"
        }, {
            name: "British Virgin Islands",
            code: "VG",
            phone_code: "+1"
        }, {
            name: "Brunei",
            code: "BN",
            phone_code: "+673"
        }, {
            name: "Bulgaria",
            code: "BG",
            phone_code: "+359"
        }, {
            name: "Burkina Faso",
            code: "BF",
            phone_code: "+226"
        }, {
            name: "Burundi",
            code: "BI",
            phone_code: "+257"
        }, {
            name: "Cambodia",
            code: "KH",
            phone_code: "+855"
        }, {
            name: "Cameroon",
            code: "CM",
            phone_code: "+237"
        }, {
            name: "Canada",
            code: "CA",
            phone_code: "+1"
        }, {
            name: "Cape Verde",
            code: "CV",
            phone_code: "+238"
        }, {
            name: "Caribbean Netherlands",
            code: "BQ",
            phone_code: "+599"
        }, {
            name: "Cayman Islands",
            code: "KY",
            phone_code: "+1"
        }, {
            name: "Central African Republic",
            code: "CF",
            phone_code: "+236"
        }, {
            name: "Chad",
            code: "ID",
            phone_code: "+235"
        }, {
            name: "Chile",
            code: "CL",
            phone_code: "+56"
        }, {
            name: "China",
            code: "CN",
            phone_code: "+86"
        }, {
            name: "Christmas Island",
            code: "CX",
            phone_code: "+61"
        }, {
            name: "Cocos [Keeling] Islands",
            code: "CC",
            phone_code: "+61"
        }, {
            name: "Colombia",
            code: "CO",
            phone_code: "+57"
        }, {
            name: "Comoros",
            code: "KM",
            phone_code: "+269"
        }, {
            name: "Cook Islands",
            code: "CK",
            phone_code: "+682"
        }, {
            name: "Costa Rica",
            code: "CR",
            phone_code: "+506"
        }, {
            name: "Côte dIvoire",
            code: "CI",
            phone_code: "+225"
        }, {
            name: "Croatia",
            code: "HR",
            phone_code: "+385"
        }, {
            name: "Cuba",
            code: "CU",
            phone_code: "+53"
        }, {
            name: "Curaçao",
            code: "CW",
            phone_code: "+599"
        }, {
            name: "Cyprus",
            code: "CY",
            phone_code: "+357"
        }, {
            name: "Czech Republic",
            code: "CZ",
            phone_code: "+420"
        }, {
            name: "Democratic Republic of Congo",
            code: "CD",
            phone_code: "+243"
        }, {
            name: "Denmark",
            code: "DK",
            phone_code: "+45"
        }, {
            name: "Djibouti",
            code: "DJ",
            phone_code: "+253"
        }, {
            name: "Dominica",
            code: "DM",
            phone_code: "+1"
        }, {
            name: "Dominican Republic",
            code: "DO",
            phone_code: "+1"
        }, {
            name: "East Timor",
            code: "TL",
            phone_code: "+670"
        }, {
            name: "Ecuador",
            code: "EC",
            phone_code: "+593"
        }, {
            name: "Egypt",
            code: "EG",
            phone_code: "+20"
        }, {
            name: "El Salvador",
            code: "SV",
            phone_code: "+503"
        }, {
            name: "Equatorial Guinea",
            code: "GQ",
            phone_code: "+240"
        }, {
            name: "Eritrea",
            code: "ER",
            phone_code: "+291"
        }, {
            name: "Estonia",
            code: "EE",
            phone_code: "+372"
        }, {
            name: "Ethiopia",
            code: "ET",
            phone_code: "+251"
        }, {
            name: "Falkland Islands",
            code: "FK",
            phone_code: "+500"
        }, {
            name: "Faroe Islands",
            code: "FO",
            phone_code: "+298"
        }, {
            name: "Fiji",
            code: "FJ",
            phone_code: "+679"
        }, {
            name: "Finland",
            code: "FI",
            phone_code: "+358"
        }, {
            name: "France",
            code: "FR",
            phone_code: "+33"
        }, {
            name: "French Guiana",
            code: "GF",
            phone_code: "+594"
        }, {
            name: "French Polynesia",
            code: "PF",
            phone_code: "+689"
        }, {
            name: "Gabon",
            code: "GA",
            phone_code: "+241"
        }, {
            name: "Gambia",
            code: "GM",
            phone_code: "+220"
        }, {
            name: "Georgia",
            code: "GE",
            phone_code: "+995"
        }, {
            name: "Germany",
            code: "DE",
            phone_code: "+49"
        }, {
            name: "Ghana",
            code: "GH",
            phone_code: "+233"
        }, {
            name: "Gibraltar",
            code: "GI",
            phone_code: "+350"
        }, {
            name: "Greece",
            code: "GR",
            phone_code: "+30"
        }, {
            name: "Greenland",
            code: "GL",
            phone_code: "+299"
        }, {
            name: "Grenada",
            code: "GD",
            phone_code: "+1"
        }, {
            name: "Guadeloupe",
            code: "GP",
            phone_code: "+590"
        }, {
            name: "Guam",
            code: "GU",
            phone_code: "+1"
        }, {
            name: "Guatemala",
            code: "GT",
            phone_code: "+502"
        }, {
            name: "Guernsey",
            code: "GG",
            phone_code: "+44"
        }, {
            name: "Guinea Conakry",
            code: "GN",
            phone_code: "+224"
        }, {
            name: "Guinea-Bissau",
            code: "GW",
            phone_code: "+245"
        }, {
            name: "Guyana",
            code: "GY",
            phone_code: "+592"
        }, {
            name: "Haiti",
            code: "HT",
            phone_code: "+509"
        }, {
            name: "Heard Island and McDonald",
            code: "HM",
            phone_code: "+672"
        }, {
            name: "Honduras",
            code: "HN",
            phone_code: "+504"
        }, {
            name: "Hong Kong",
            code: "HK",
            phone_code: "+852"
        }, {
            name: "Hungary",
            code: "HU",
            phone_code: "+36"
        }, {
            name: "Iceland",
            code: "IS",
            phone_code: "+354"
        }, {
            name: "India",
            code: "IN",
            phone_code: "+91"
        }, {
            name: "Indonesia",
            code: "ID",
            phone_code: "+62"
        }, {
            name: "Iran",
            code: "IR",
            phone_code: "+98"
        }, {
            name: "Iraq",
            code: "IQ",
            phone_code: "+964"
        }, {
            name: "Ireland",
            code: "IE",
            phone_code: "+353"
        }, {
            name: "Isle of Man",
            code: "IM",
            phone_code: "+44"
        }, {
            name: "Israel",
            code: "IL",
            phone_code: "+972"
        }, {
            name: "Italy",
            code: "IT",
            phone_code: "+39"
        }, {
            name: "Jamaica",
            code: "JM",
            phone_code: "+1"
        }, {
            name: "Japan",
            code: "JP",
            phone_code: "+81"
        }, {
            name: "Jersey",
            code: "JE",
            phone_code: "+44"
        }, {
            name: "Jordan",
            code: "JO",
            phone_code: "+962"
        }, {
            name: "Kazakhstan",
            code: "KZ",
            phone_code: "+7"
        }, {
            name: "Kenya",
            code: "KE",
            phone_code: "+254"
        }, {
            name: "Kiribati",
            code: "KI",
            phone_code: "+686"
        }, {
            name: "Kosovo",
            code: "XK",
            phone_code: "+381"
        }, {
            name: "Kosovo",
            code: "XK",
            phone_code: "+377"
        }, {
            name: "Kosovo",
            code: "XK",
            phone_code: "+386"
        }, {
            name: "Kuwait",
            code: "KW",
            phone_code: "+965"
        }, {
            name: "Kyrgyzstan",
            code: "KG",
            phone_code: "+996"
        }, {
            name: "Laos",
            code: "LA",
            phone_code: "+856"
        }, {
            name: "Latvia",
            code: "LV",
            phone_code: "+371"
        }, {
            name: "Lebanon",
            code: "LB",
            phone_code: "+961"
        }, {
            name: "Lesotho",
            code: "LS",
            phone_code: "+266"
        }, {
            name: "Liberia",
            code: "LR",
            phone_code: "+231"
        }, {
            name: "Libya",
            code: "LY",
            phone_code: "+218"
        }, {
            name: "Liechtenstein",
            code: "LI",
            phone_code: "+423"
        }, {
            name: "Lithuania",
            code: "LT",
            phone_code: "+370"
        }, {
            name: "Luxembourg",
            code: "LU",
            phone_code: "+352"
        }, {
            name: "Macau",
            code: "MO",
            phone_code: "+853"
        }, {
            name: "Macedonia",
            code: "MK",
            phone_code: "+389"
        }, {
            name: "Madagascar",
            code: "MG",
            phone_code: "+261"
        }, {
            name: "Malawi",
            code: "MW",
            phone_code: "+265"
        }, {
            name: "Malaysia",
            code: "MY",
            phone_code: "+60"
        }, {
            name: "Maldives",
            code: "MV",
            phone_code: "+960"
        }, {
            name: "Mali",
            code: "ML",
            phone_code: "+223"
        }, {
            name: "Malta",
            code: "MT",
            phone_code: "+356"
        }, {
            name: "Marshall Islands",
            code: "MH",
            phone_code: "+692"
        }, {
            name: "Martinique",
            code: "MQ",
            phone_code: "+596"
        }, {
            name: "Mauritania",
            code: "MR",
            phone_code: "+222"
        }, {
            name: "Mauritius",
            code: "MU",
            phone_code: "+230"
        }, {
            name: "Mayotte",
            code: "YT",
            phone_code: "+262"
        }, {
            name: "Mexico",
            code: "MX",
            phone_code: "+52"
        }, {
            name: "Micronesia",
            code: "FM",
            phone_code: "+691"
        }, {
            name: "Moldova",
            code: "MD",
            phone_code: "+373"
        }, {
            name: "Monaco",
            code: "MC",
            phone_code: "+377"
        }, {
            name: "Mongolia",
            code: "MN",
            phone_code: "+976"
        }, {
            name: "Montenegro",
            code: "ME",
            phone_code: "+382"
        }, {
            name: "Montserrat",
            code: "MS",
            phone_code: "+1"
        }, {
            name: "Morocco",
            code: "MA",
            phone_code: "+212"
        }, {
            name: "Mozambique",
            code: "MZ",
            phone_code: "+258"
        }, {
            name: "Myanmar [Burma]",
            code: "MM",
            phone_code: "+95"
        }, {
            name: "Namibia",
            code: "NA",
            phone_code: "+264"
        }, {
            name: "Nauru",
            code: "NR",
            phone_code: "+674"
        }, {
            name: "Nepal",
            code: "NP",
            phone_code: "+977"
        }, {
            name: "Netherlands",
            code: "NL",
            phone_code: "+31"
        }, {
            name: "New Caledonia",
            code: "NC",
            phone_code: "+687"
        }, {
            name: "New Zealand",
            code: "NZ",
            phone_code: "+64"
        }, {
            name: "Nicaragua",
            code: "NI",
            phone_code: "+505"
        }, {
            name: "Niger",
            code: "NE",
            phone_code: "+227"
        }, {
            name: "Nigeria",
            code: "NG",
            phone_code: "+234"
        }, {
            name: "Niue",
            code: "NU",
            phone_code: "+683"
        }, {
            name: "Norfolk Island",
            code: "NF",
            phone_code: "+672"
        }, {
            name: "North Korea",
            code: "KP",
            phone_code: "+850"
        }, {
            name: "Northern Mariana Islands",
            code: "MP",
            phone_code: "+1"
        }, {
            name: "Norway",
            code: "NO",
            phone_code: "+47"
        }, {
            name: "Oman",
            code: "OM",
            phone_code: "+968"
        }, {
            name: "Pakistan",
            code: "PK",
            phone_code: "+92"
        }, {
            name: "Palau",
            code: "PW",
            phone_code: "+680"
        }, {
            name: "Palestine",
            code: "PS",
            phone_code: "+970"
        }, {
            name: "Panama",
            code: "PA",
            phone_code: "+507"
        }, {
            name: "Papua New Guinea",
            code: "PG",
            phone_code: "+675"
        }, {
            name: "Paraguay",
            code: "PY",
            phone_code: "+595"
        }, {
            name: "Peru",
            code: "PE",
            phone_code: "+51"
        }, {
            name: "Philippines",
            code: "PH",
            phone_code: "+63"
        }, {
            name: "Poland",
            code: "PL",
            phone_code: "+48"
        }, {
            name: "Portugal",
            code: "PT",
            phone_code: "+351"
        }, {
            name: "Puerto Rico",
            code: "PR",
            phone_code: "+1"
        }, {
            name: "Qatar",
            code: "QA",
            phone_code: "+974"
        }, {
            name: "Republic of the Congo",
            code: "CG",
            phone_code: "+242"
        }, {
            name: "Réunion",
            code: "RE",
            phone_code: "+262"
        }, {
            name: "Romania",
            code: "RO",
            phone_code: "+40"
        }, {
            name: "Russia",
            code: "RU",
            phone_code: "+7"
        }, {
            name: "Rwanda",
            code: "RW",
            phone_code: "+250"
        }, {
            name: "Saint Barthélemy",
            code: "BL",
            phone_code: "+590"
        }, {
            name: "Saint Helena",
            code: "SH",
            phone_code: "+290"
        }, {
            name: "Saint Martin",
            code: "MF",
            phone_code: "+590"
        }, {
            name: "Saint Pierre and Miquelon",
            code: "PM",
            phone_code: "+508"
        }, {
            name: "Saint Vincent and the Grenadines",
            code: "VC",
            phone_code: "+1"
        }, {
            name: "Samoa",
            code: "WS",
            phone_code: "+685"
        }, {
            name: "San Marino",
            code: "SM",
            phone_code: "+378"
        }, {
            name: "São Tomé and Príncipe",
            code: "ST",
            phone_code: "+239"
        }, {
            name: "Saudi Arabia",
            code: "SA",
            phone_code: "+966"
        }, {
            name: "Senegal",
            code: "SN",
            phone_code: "+221"
        }, {
            name: "Serbia",
            code: "RS",
            phone_code: "+381"
        }, {
            name: "Seychelles",
            code: "SC",
            phone_code: "+248"
        }, {
            name: "Sierra Leone",
            code: "SL",
            phone_code: "+232"
        }, {
            name: "Singapore",
            code: "SG",
            phone_code: "+65"
        }, {
            name: "Sint Maarten",
            code: "SX",
            phone_code: "+1"
        }, {
            name: "Slovakia",
            code: "SK",
            phone_code: "+421"
        }, {
            name: "Slovenia",
            code: "SI",
            phone_code: "+386"
        }, {
            name: "Solomon Islands",
            code: "SB",
            phone_code: "+677"
        }, {
            name: "Somalia",
            code: "SO",
            phone_code: "+252"
        }, {
            name: "South Africa",
            code: "ZA",
            phone_code: "+27"
        }, {
            name: "South Georgia and The South Sandwich Islands",
            code: "GS",
            phone_code: "+500"
        }, {
            name: "South Korea",
            code: "KR",
            phone_code: "+82"
        }, {
            name: "South Sudan",
            code: "SS",
            phone_code: "+211"
        }, {
            name: "Spain",
            code: "ES",
            phone_code: "+34"
        }, {
            name: "Sri Lanka",
            code: "LK",
            phone_code: "+94"
        }, {
            name: "St. Lucia",
            code: "LC",
            phone_code: "+1"
        }, {
            name: "St. Kitts",
            code: "KN",
            phone_code: "+1"
        }, {
            name: "St. Vincent",
            code: "VC",
            phone_code: "+1"
        }, {
            name: "Sudan",
            code: "SD",
            phone_code: "+249"
        }, {
            name: "Suriname",
            code: "SR",
            phone_code: "+597"
        }, {
            name: "Swaziland",
            code: "SZ",
            phone_code: "+268"
        }, {
            name: "Svalbard and Jan Mayen",
            code: "SJ",
            phone_code: "+47"
        }, {
            name: "Sweden",
            code: "SE",
            phone_code: "+46"
        }, {
            name: "Switzerland",
            code: "CH",
            phone_code: "+41"
        }, {
            name: "Syria",
            code: "SY",
            phone_code: "+963"
        }, {
            name: "Taiwan",
            code: "TW",
            phone_code: "+886"
        }, {
            name: "Tajikistan",
            code: "TJ",
            phone_code: "+992"
        }, {
            name: "Tanzania",
            code: "TZ",
            phone_code: "+255"
        }, {
            name: "Thailand",
            code: "TH",
            phone_code: "+66"
        }, {
            name: "Togo",
            code: "TG",
            phone_code: "+228"
        }, {
            name: "Tokelau",
            code: "TK",
            phone_code: "+690"
        }, {
            name: "Tonga",
            code: "TO",
            phone_code: "+676"
        }, {
            name: "Trinidad and Tobago",
            code: "TT",
            phone_code: "+1"
        }, {
            name: "Tunisia",
            code: "TN",
            phone_code: "+216"
        }, {
            name: "Turkey",
            code: "TR",
            phone_code: "+90"
        }, {
            name: "Turkmenistan",
            code: "TM",
            phone_code: "+993"
        }, {
            name: "Turks and Caicos Islands",
            code: "TC",
            phone_code: "+1"
        }, {
            name: "Tuvalu",
            code: "TV",
            phone_code: "+688"
        }, {
            name: "U.S. Virgin Islands",
            code: "VI",
            phone_code: "+1"
        }, {
            name: "Uganda",
            code: "UG",
            phone_code: "+256"
        }, {
            name: "Ukraine",
            code: "UA",
            phone_code: "+380"
        }, {
            name: "United Arab Emirates",
            code: "AE",
            phone_code: "+971"
        }, {
            name: "United Kingdom",
            code: "GB",
            phone_code: "+44"
        }, {
            name: "United States",
            code: "US",
            phone_code: "+1"
        }, {
            name: "Uruguay",
            code: "UY",
            phone_code: "+598"
        }, {
            name: "US Virgin Islands",
            code: "VI",
            phone_code: "+1"
        }, {
            name: "Uzbekistan",
            code: "UZ",
            phone_code: "+998"
        }, {
            name: "Vanuatu",
            code: "VU",
            phone_code: "+678"
        }, {
            name: "Vatican City",
            code: "VA",
            phone_code: "+379"
        }, {
            name: "Venezuela",
            code: "VE",
            phone_code: "+58"
        }, {
            name: "Vietnam",
            code: "VN",
            phone_code: "+84"
        }, {
            name: "Wallis and Futuna",
            code: "WF",
            phone_code: "+681"
        }, {
            name: "Western Sahara",
            code: "EH",
            phone_code: "+212"
        }, {
            name: "Yemen",
            code: "YE",
            phone_code: "+967"
        }, {
            name: "Zambia",
            code: "ZM",
            phone_code: "+260"
        }, {
            name: "Zimbabwe",
            code: "ZW",
            phone_code: "+263"
        }]
    }
    e.$inject = ["Data", "$scope", "toastr", "$interval", "$window", "$http"], angular.module("stockgo.system").controller("homeController", e)
}(),
function() {
    "use strict";

    function e(e, a) {
        function n(n, s, i) {
            let c = o.encode("1-4A-" + n + ":" + s);
            a.globals = {
                userId: n,
                username: s,
                authdata: c
            };
            let d = new Date;
            d.setDate(d.getDate() + 7), e.cookie.set("global", a.globals, d)
        }

        function s() {
            a.globals = {}, e.cookie.remove("global")
        }

        function i(e) {
            if (null == e || void 0 == e.authdata || null == e.authdata) return !1;
            let a = o.decode(e.authdata);
            return a.indexOf(e.username) > -1 && a.indexOf("1-4A-" + e.userId) > -1 ? e : !1
        }
        let c = {};
        return c.SetCredentials = n, c.GetCredentials = i, c.ClearCredentials = s, c
    }
    e.$inject = ["localStorageService", "$rootScope"], angular.module("stockgo.system").factory("AuthenticationService", e);
    let o = {
        keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(e) {
            let o, a, n, s, i, c = "",
                d = "",
                t = "",
                r = 0;
            do o = e.charCodeAt(r++), a = e.charCodeAt(r++), d = e.charCodeAt(r++), n = o >> 2, s = (3 & o) << 4 | a >> 4, i = (15 & a) << 2 | d >> 6, t = 63 & d, isNaN(a) ? i = t = 64 : isNaN(d) && (t = 64), c = c + this.keyStr.charAt(n) + this.keyStr.charAt(s) + this.keyStr.charAt(i) + this.keyStr.charAt(t), o = a = d = "", n = s = i = t = ""; while (r < e.length);
            return c
        },
        decode: function(e) {
            let o, a, n, s, i, c = "",
                d = "",
                t = "",
                r = 0,
                l = /[^A-Za-z0-9\+\/\=]/g;
            l.exec(e) && window.alert("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            do n = this.keyStr.indexOf(e.charAt(r++)), s = this.keyStr.indexOf(e.charAt(r++)), i = this.keyStr.indexOf(e.charAt(r++)), t = this.keyStr.indexOf(e.charAt(r++)), o = n << 2 | s >> 4, a = (15 & s) << 4 | i >> 2, d = (3 & i) << 6 | t, c += String.fromCharCode(o), 64 != i && (c += String.fromCharCode(a)), 64 != t && (c += String.fromCharCode(d)), o = a = d = "", n = s = i = t = ""; while (r < e.length);
            return c
        }
    }
}();
let JSONH, jsonh = JSONH = function(e, o) {
    "use strict";

    function a(o) {
        for (let a, n, s = o.length, i = h(s ? o[0] : {}), c = i.length, d = e(s * c), t = 0, r = 0; s > t; ++t)
            for (n = o[t], a = 0; c > a; d[r++] = n[i[a++]]);
        return p.call([c], i, d)
    }

    function n(o) {
        for (let a, n, s = o.length, i = o[0], c = e((s - i - 1) / i || 0), d = 1 + i, t = 0; s > d;)
            for (c[t++] = n = {}, a = 0; i > a; n[o[++a]] = o[d++]);
        return c
    }

    function s(e) {
        return function(o) {
            for (let a, n, s, i = this, c = o, d = 0, t = i.length; t > d; ++d) m(s = c[n = i[d]]) && (a = d + 1, c[n] = t > a ? f.call(s, e, i.slice(a)) : e(s)), c = c[n];
            return o
        }
    }

    function i(e) {
        return function(o, a) {
            for (let n = m(o), s = p.call(l, o), i = p.call(l, a), c = 0, d = i.length; d > c; ++c) s = f.call(s, e, i[c].split("."));
            return n ? s : s[0]
        }
    }

    function c(e, o) {
        return o ? u(e, o) : a(e)
    }

    function d(e, o) {
        return o ? v(e, o) : n(e)
    }

    function t(e, o, a, n) {
        return g(c(e, n), o, a)
    }

    function r(e, o, a) {
        return d(_(e, o), a)
    }
    let l = [],
        p = l.concat,
        h = Object.keys || function(e) {
            let o, a = [];
            for (o in e) e.hasOwnProperty(o) && a.push(o);
            return a
        },
        m = e.isArray || function(e, o) {
            return o = e.call(l),
                function(a) {
                    return e.call(a) == o
                }
        }({}.toString),
        f = l.map || function(o, a) {
            for (let n = this, s = n.length, i = e(s); s--; i[s] = o.call(a, n[s], s, n));
            return i
        },
        u = i(s(a)),
        v = i(s(n)),
        g = o.stringify,
        _ = o.parse;
    return {
        pack: c,
        parse: r,
        stringify: t,
        unpack: d
    }
}(Array, JSON);
"undefined" != typeof module && module.exports && (module.exports = jsonh),
    function() {
        "use strict";

        function e() {}
        angular.module("stockgo.system").run(e)
    }(),
    function() {
        "use strict";

        function e(e, o, a) {
            e.state("home", {
                url: "/",
                templateUrl: "app/home/home.html",
                controller: "homeController",
                controllerAs: "vmh"
            }), o.otherwise("/"), a.html5Mode(!0)
        }
        e.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"], angular.module("stockgo.system").config(e)
    }(),
    function() {
        "use strict";
        angular.module("stockgo.system")
    }(), angular.module("stockgo.system").run(["$templateCache", function(e) {
        e.put("app/home/home.html", '<div class=stockgo-body-wp><div class=hdr><div class=nav-lg><div class=cntr><div class=row><div class="col-lg-3 col-md-3 lg-wp"><h1><strong>STOCKGO LOGO</strong> <a title="STOCKGO LOGO" href=""><img alt="STOCKGO LOGO" src=https://nangjang.github.io/StockGo/assets/images/StockGo-logo.png style=width:80px;height:80px></a></h1></div><div class="col-lg-9 col-md-9 nav-wp">\x3c!-- <div class="nav-cntr">\n                     <ul class="nav">\n                        <li>\n                           <a id="lk-1" href="#" title="Demo">Demo</a>\n<ul>\n                              <li>Products</li>\n                              <li>Products</li>\n                              <li>Products</li>\n                              <li>Products</li>\n                              <li>Products</li>\n                              <li>Products</li>\n                              <li>Products</li>\n                              <li>Demo</li>\n                           </ul>\n                        </li>\n                        <li><a id="lk-2" href="#" title="Demo">Mobile Layouts</a></li>\n                        <li><a id="lk-3" href="#" title="All features">All features</a></li>\n                        <li><a id="lk-4" href="#" title="Pages Setting">Pages Setting</a></li>\n                        <li><a id="lk-5" href="#" title="Support">Support</a></li>\n                        <li><a id="lk-6" href="#" title="Purchase">Purchase</a></li>\n                     </ul>\n                     <div class="clrfix"></div>\n                  </div> --\x3e</div></div></div></div></div><div id=hl-cnt class=hl-cnt><canvas id=cnvs-1></canvas><div class=cntr><div class=go-dwn-wp><a tabindex=-1 class="go-dwn ani inf fadOutDwn" href=#><i class="fas fa-arrow-down" style=pointer-events:none;color:#fff></i></a></div></div></div><div class=dev-inf><div class=web-ad><div class=tit-hdr><h2>WHY STOCKGO?</h2><h2 style=white-space:nowrap;text-align:left><span class=bg_txt>It\'s a <span class=sty_txt>Powerful Tool</span> for </span><span href="" class="typewrite bg_txt" data-period=5000 data-type=\'["Ecommerce","Wholesaler", "Retailer"]\'><span class=typewrite_txt>{{view.type}}</span></span></h2></div>\x3c!-- <div id="sign-in-form" ng-if="vmh.showSignInBlock" class="pos_signup"> --\x3e<div ng-if=vmh.signin class=pos_signup><div class=dp-dwn><div ng-click=vmh.selectCountry() class=txtfir><div class=cou-fl><div class="cou-co-fl cou-co-fl-{{vmh.country.code}}"></div></div>{{vmh.country.phone_code}} <img src=https://nangjang.github.io/StockGo/assets/images/icon-arrow-down.png width=10 height=10></div><ul style="overflow-x: hidden" ng-if=vmh.showCountryList><li class=in-op style="padding: 0"><input type=text id=searchcountry ng-model=search placeholder="Search Country Name"> <span ng-click="vmh.showCountryList=false" style="font-size: 27px;float: right;margin-right: 11px">&times;</span></li><li ng-repeat="list in vmh.worldCountryList | filter:search track by $index" ng-click="vmh.country = list; vmh.showCountryList=false" class=in-op><div class=in-op-fx><div class=cou-fl><div class="cou-co-fl cou-co-fl-{{list.code}}"></div></div><div class=cou-co-wo>{{list.name}}</div><div class=cou-co-nm>‎{{list.phone_code}}</div></div></li></ul><input type=hidden class=option name=namesubmit></div>{{vmh.countrycode}} <input type=text ng-model=vmh.mobileno placeholder="Enter Mobile Number"> <button title=Register ng-click="vmh.startTrial(vmh.country, vmh.mobileno)">14 Days Free Trial</button></div>\x3c!-- Phone Verification Section --\x3e<div class=pos_signup ng-if=vmh.verify><input type=text ng-model=vmh.code name="" placeholder="Enter Verification Code From SMS"> <button ng-click=vmh.verifyCode(vmh.code) title="Verify Code">Verify</button> <button style="background: #a50808" ng-click=vmh.cancelVerification()>Cancel</button></div><p ng-if=vmh.resend style="color: white">I can\'t receive SMS on my mobile. <a href="" style="color: yellow" ng-click=vmh.resendcodeagain()>Resend Again</a></p></div><div class=ma-img-dev style="text-align: center"><svg class="pl-btn pulse" xmlns=http://www.w3.org/2000/svg viewBox="0 0 50 50"><circle cx=25 cy=25 r=24 fill=#10d04f fill-opacity=.7 /><path fill=#fff d="M37 25L19 38V12"/></svg> <img src=https://nangjang.github.io/StockGo/assets/images/showcase-apps.png alt=""></div></div><div id=cnt-inf style=margin-bottom:180px><div id=cnt-inf-2 class=cnt-inf-2><div class=cntr><div class=cnt-sh><div class=tit-pg><h2>Check Our Infograph</h2><h3>Learn how we fit any kind of your business</h3></div><div class=inf-sh><div id=pos_infgph><div class="svg-cnt infgph_cnt"><svg xmlns=http://www.w3.org/2000/svg class=svg-defs><defs><symbol class=infgph_sym xmlns=http://www.w3.org/2000/svg id=infgph_arrows viewBox="0 0 1200 1200"><style>.infgph_arrows-head {\n                                                fill: none;\n                                                stroke: #10d04f;\n                                                stroke-linecap: round;\n                                                stroke-linejoin: round;\n                                                stroke-width: 4px\n                                            }\n\n                                            .infgph_dash {\n                                                fill: none;\n                                                stroke: #10d04f;\n                                                stroke-linecap: round;\n                                                stroke-linejoin: round;\n                                                stroke-width: 4px;\n                                                stroke-dasharray: 5px 8px\n                                            }</style><path d="M650 -20 l0 70 c0 0 -5 10 -5 10 l-73 43 M850 120 l0 60 c0 0 -5 10 -5 10 l-150 93 M160 -50 l0 100 c0 0 5 10 5 10 l210 122 M60 520 l0 50 c0 0 5 5 5 5 l255 -155 M505 720 l-90 45 c0 0 -20 10 -20 10 l-100 -60" class=infgph_dash><animate attributeType=XML attributeName=stroke-dashoffset from=43200 to=0 dur=3600s repeatCount=indefinite></animate></path><path d="M330 412 l-20 0 M330 412 l-5 15 M562 110 l6 -16 M562 110 l20 0 M685 290 l18 -2 M685 290 l8 -18 M1009 545 l15 -12 M1009 545 l15 12 M1110 366 l12 15 M1110 366 l-12 15 M750 670 l15 -12 M750 670 l15 12 M948 598 l12 15 M948 598 l-12 15 M385 186 l-8 -16 M385 186 l-15 5 M50 140 l-10 20 M50 140 l10 15 M235 315 l-5 -15 M235 315 l-20 2 M579 460 l18 2 M579 460 l2 15 M673 592 l10 -18 M673 592 l-12 -14 M285 708 l20 0 M285 708 l5 15\n                                       M265 238 l10 10 M265 238 l-8 18 M432 185 l-18 0 M432 185 l-5 15" class=infgph_arrows-head></path><path d="M50 152 l0 50 c0 0 5 10 5 10 l170 97 M588 467 l80 50 c0 0 5 10 5 10 l0 54 M760 670 l180 0 c0 0 8 -10 8 -10 l0 -52 M1020 545 l85 0 c0 0 5 -10 5 -10 l0 -160 M265 250 l0 30 l160 -90" class="infgph_dash infgph_dash-alt"><animate attributeType=XML attributeName=stroke-dashoffset dur=6s repeatCount=indefinite calcMode=spline values="36; 0; 36" keySplines="0.5 0 .5 1; 0.5 0 .5 1"></animate></path></symbol></defs></svg><div class=infgph_wp><div class=infgph><a href="" class="infgph_pos infgph_trform infgph_trform_half pos-web-cnt" style=z-index:0><p class="infgph_pos_txt infgph_trform-fade"><span class=infgph_txt_t>Stockgo Inventory System</span>Manage inventory across multiple selling channels. Understand your inventory in real-time and improve business decisions. Manage products, stock levels and advanced inventory controls with all-in-one online e-commerce inventory and fulfillment solution.</p><div class=infgph_fetr_img><img src=https://nangjang.github.io/StockGo/assets/images/StockGo-main.png></div></a><a href="" class="infgph_pos infgph_trform infgph_trform_half pos-web-cnt-2"><p class="infgph_pos_txt infgph_trform-fade"><span class=infgph_txt_t>Mobile</span>Sell On the Go with Stockgo Mobile App.</p><div class=infgph_fetr_img><img src=https://nangjang.github.io/StockGo/assets/images/mobile.png></div></a><a href="" class="infgph_pos infgph_trform infgph_trform_half pos-sof-1"><p class="infgph_pos_txt infgph_trform-fade"><span class=infgph_txt_t>Ecommerce</span> Design ready interface to customize your online shop without having to know how to code by using any of the customizable templates to design your store, sell and market your products/business.</p><div class=infgph_fetr_img><img src=https://nangjang.github.io/StockGo/assets/images/ecom.png></div></a><a href="" class="infgph_pos infgph_trform infgph_trform_half pos-sof-2"><p class="infgph_pos_txt infgph_trform-fade"><span class=infgph_txt_t>Point Of Sale</span>POS can be used on Ipad, Android, PC and Mac, giving you complete opportunity of choice in gadgets.</p><div class=infgph_fetr_img><img src=https://nangjang.github.io/StockGo/assets/images/pos.png></div></a><a href="" class="infgph_pos infgph_trform infgph_trform_half pos-sof-3"><p class="infgph_pos_txt infgph_trform-fade"><span class=infgph_txt_t>Sell On Mobile</span>Customers will be able to Buy Products on Mobile devices.</p><div class=infgph_fetr_img><img src=https://nangjang.github.io/StockGo/assets/images/mobile-app.png></div></a><a href="" class="infgph_pos infgph_trform infgph_trform_half pos-sof-4"><p class="infgph_pos_txt infgph_trform-fade"><span class=infgph_txt_t>Report</span>Analyze and Determine the Key Factors that helps your Business to Grow at an Enormous Pace.</p><div class=infgph_fetr_img><img src=https://nangjang.github.io/StockGo/assets/images/report.png></div></a><a href="" class="infgph_pos infgph_trform infgph_trform_half pos-sof-5"><p class="infgph_pos_txt infgph_trform-fade"><span class=infgph_txt_t>Stockgo B2B Portal</span>Invite Retail and Wholesale customers to join your own branded B2B portal.</p><div class=infgph_fetr_img><img src=https://nangjang.github.io/StockGo/assets/images/b2b-portal.png></div></a><a href="" class="infgph_pos infgph_trform infgph_trform_half pos-sof-6"><p class="infgph_pos_txt infgph_trform-fade"><span class=infgph_txt_t>Shipping</span>Streamline and simplify your fulfilment stage by automating the Pick, Pack and Ship steps for every sales channel. You can also export Tracking numbers to your ecommerce store.</p><div class=infgph_fetr_img><img src=https://nangjang.github.io/StockGo/assets/images/shipping.png></div></a><a href="" class="infgph_pos infgph_trform infgph_trform_half pos-sof-7"><p class="infgph_pos_txt infgph_trform-fade"><span class=infgph_txt_t>Manufacturing</span>With Stockgo, creating a detailed Bill of Materials for your inventory and subassemblies is simple, giving you a true picture of raw material, labour and overhead costs.</p><div class=infgph_fetr_img><img src=https://nangjang.github.io/StockGo/assets/images/manufacturing.png></div></a><a href="" class="infgph_pos infgph_trform infgph_trform_half pos-sof-8"><p class="infgph_pos_txt infgph_trform-fade"><span class=infgph_txt_t>Production Order</span>Automate Production Orders, Purchase Orders and Bill of Materials.</p><div class=infgph_fetr_img><img src=https://nangjang.github.io/StockGo/assets/images/production-order.png></div></a><a href="" class="infgph_pos infgph_trform infgph_trform_half pos-sof-9"><p class="infgph_pos_txt infgph_trform-fade"><span class=infgph_txt_t>Suppliers</span>By recording your entire Purchase History, Stockgo allows you to access Comprehensive Supplier information, Powering Intelligent Decision-Making and minimising Financial Losses.</p><div class=infgph_fetr_img><img src=https://nangjang.github.io/StockGo/assets/images/inventory.png></div></a><div class=infgph_arrows><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 1000 1500"><use xlink:href=#infgph_arrows></use></svg></div></div></div></div></div></div></div></div></div></div><div class=usr-cli-rat><h1 style="color: rgba(0, 0, 0, .87)">The Stage of Decision for <strong>Developing Organizations</strong></h1><div class=usr-cli-inf><div class=usr-cli-dat><h3 class=usr-cli-h style=color:#FF7D54>20</h3><p>We serve glad clients in <strong>20 nations</strong> around the world.</p></div><div class=usr-cli-dat><h3 class=usr-cli-h style=color:#C1065E>700+</h3><p>More than <strong>700 clients</strong> trust us consistently with their organizations.</p></div><div class=usr-cli-dat><h3 class=usr-cli-h style=color:#F65B86>$1.6B</h3><p>Over <strong>USD $1 billion</strong> in sales orders have been executed through our framework.</p></div></div></div><div id=adm-wp><div id=alfea class=alfea><div class=cntr><div class=alfea-cnt><div class=tit-pg><h2>Our Features</h2><h3>There are such a large number of motivations to pick Stockgo, here are a couple of things</h3></div><div class=li-itm><div class=row><div class="col-lg-4 col-md-4 fea-itm"><div class=itm-in><div class=fea-tit><span><img src=https://nangjang.github.io/StockGo/assets/images/icon-shop.png alt="Cart"></span><span>POS [Web / Android / iOS]</span></div><div class=desc>Stockgo POS is available in all platform (Web / Android / iOS) from where you can generate the bills and read the barcode for in-store checkout, process transactions and manage your stock on the go with Stockgo POS systems. Our apps are intuitive to use and easy to train on, so you and your staff can get started right away.</div></div></div><div class="col-lg-4 col-md-4 fea-itm"><div class=itm-in><div class=fea-tit><span><img src=https://nangjang.github.io/StockGo/assets/images/icon-shop.png alt="Cart"></span><span>Ecommerce Platform</span></div><div class=desc>Browse over our ecommerce themed templates and open your new online store in merely minutes and sell your products. Our E-commerce platform offers a way to quickly launch your dream business and start selling to your customers, wherever they are.</div></div></div><div class="col-lg-4 col-md-4 fea-itm"><div class=itm-in><div class=fea-tit><span><img src=https://nangjang.github.io/StockGo/assets/images/icon-shop.png alt="Cart"></span><span>Mobile App [Android / iOS]</span></div><div class=desc>Build and get the ultimate Mobile Ecommerce App [Android / iOS] for your store on your own branding. Your customers with a mobile app makes it easier for them to buy and connect with your brand.</div></div></div><div class="col-lg-4 col-md-4 fea-itm"><div class=itm-in><div class=fea-tit><span><img src=https://nangjang.github.io/StockGo/assets/images/icon-shop.png alt="Cart"></span><span>B2B Commerce</span></div><div class=desc>Our B2B Commerce solution makes selling wholesale easier than ever before, and it’s even better for your customers and customer sees the products that you want them to, at the prices and discounts that you decide.</div></div></div><div class="col-lg-4 col-md-4 fea-itm"><div class=itm-in><div class=fea-tit><span><img src=https://nangjang.github.io/StockGo/assets/images/icon-folder.png alt="Sample Data"></span><span>Inventory Management</span></div><div class=desc>Improve stock and inventory tracking through automatically updated stock levels whenever sales and purchases are made. With Stockgo, you can manage your inventory across all sales channel and access accurate inventory reports that offer real time insights into stock movement and also allows you to run stock reorder reports, inventory stock on hand reports, and more.</div></div></div><div class="col-lg-4 col-md-4 fea-itm"><div class=itm-in><div class=fea-tit><span><img src=https://nangjang.github.io/StockGo/assets/images/icon-letter.png alt="Google Fonts"></span><span>Omnichannel Commerce</span></div><div class=desc>Our Omnichannel commerce supports multichannel approach to sales that seeks to provide customers with a seamless shopping experience, whether they\'re shopping online from a desktop or mobile device, by telephone, or in a physical store.</div></div></div><div class="col-lg-4 col-md-4 fea-itm"><div class=itm-in><div class=fea-tit><span><img src=https://nangjang.github.io/StockGo/assets/images/icon-home.png alt=Home></span><span>Synchronize your Stores</span></div><div class=desc>Make your life easier and manage your online and physical stores from the same reliable, user-friendly system. Synchronize your online and physical store’s inventory and know what’s in stock at all times and get a clear overview of your sales across all channels.</div></div></div><div class="col-lg-4 col-md-4 fea-itm"><div class=itm-in><div class=fea-tit><span><img src=https://nangjang.github.io/StockGo/assets/images/icon-devices.png alt="Fully Responsive"></span><span>Multichannel Sales</span></div><div class=desc>Stockgo provides a central hub to manage inventory and orders for all your sales channels efficiently and effortlessly. You can selling on Point of Sale, B2C and B2B eCommerce platforms, and on mobile app.</div></div></div><div class="col-lg-4 col-md-4 fea-itm"><div class=itm-in><div class=fea-tit><span><img src=https://nangjang.github.io/StockGo/assets/images/icon-note.png alt="Mega Menu"></span><span>Fast and easy setup.</span></div><div class=desc>Whether you\'re an eCommerce guru or just getting started, our easy-to-use system helps you get your shop set up in no time with intuitive interface that you and your employees will love and get the multi customizable templates ready to sell your product online.</div></div></div></div><a href="" class=btn-def>More Features</a></div></div></div></div>\x3c!-- <div id="sup" class="sup-cntr">\n                  <div class="cntr">\n                     <div class="sup-cnt">\n                        <div class="tit-pg">\n                           <h2>Any Queries?</h2>\n                           <h3>Your inquiries for help make us more grounded!</h3>\n                        </div>\n                        <a href="" class="btn-def">Contact Us</a>\n                     </div>\n                  </div>\n               </div> --\x3e<div class=by-btn-pro><div class=cntr><div class=by-btn-cnt><h4>Create Your Online Business With Our Software Now!</h4><div><h2>Try Our Inventory Management Software With a Free 14 Days Trial.</h2></div><a href="" ng-click=goToTop() class=btn-def>Get Started</a></div></div></div><div class="pos-ftr row"><div class="pos-ftr-col col-xl-3 col-lg-3 col-md-3 col-sm-6"><div><p class=pos-ftr-tit>Company</p></div><div class=pos-ftr-dpdwn><div class=pos-ftr-li><a class=pos-ftr-lk href="">About Us</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Careers</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Media</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Brand Guidelines</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Blog</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Security</a></div></div><div><p class=pos-ftr-tit>Help &amp; Support</p></div><div class=pos-ftr-dpdwn><div class=pos-ftr-li><a class=pos-ftr-lk href="">Contact Us</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Contact Sales</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Help Centre</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">FAQs</a></div></div></div><div class="pos-ftr-col col-xl-3 col-lg-3 col-md-3 col-sm-6"><div><p class=pos-ftr-tit>Programs</p></div><div class=pos-ftr-dpdwn><div class=pos-ftr-li><a class=pos-ftr-lk href="">Advisor Program</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Reseller Program</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Expert Program</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Developer Program</a></div></div><div><p class=pos-ftr-tit>Follow Us</p></div><div class=pos-ftr-dpdwn><div class=pos-ftr-li><a class=pos-ftr-lk href="">Our Blog</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Twitter</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href=https://www.facebook.com/stockgo>Facebook</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">LinkedIn</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Youtube</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Instagram</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Pinterest</a></div></div></div><div class="pos-ftr-col col-xl-3 col-lg-3 col-md-3 col-sm-6"><div><p class=pos-ftr-tit>Retail Resources</p></div><div class=pos-ftr-dpdwn><div class=pos-ftr-li><a class=pos-ftr-lk href="">POS System Buyers Guide</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Inventory Excel Template</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Retail Dictionary</a></div></div><div><p class=pos-ftr-tit>The best of retail</p></div><div class=pos-ftr-dpdwn><div class=pos-ftr-li><a class=pos-ftr-lk href="">iPad POS</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">POS System</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Multi Store POS</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">EPOS Software</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">POS Ecommerce</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">POS Cash Register</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">EPOS System</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">POS Barcode Scanner</a></div></div></div><div class="pos-ftr-col col-xl-3 col-lg-3 col-md-3 col-sm-6"><div><p class=pos-ftr-tit>Region</p></div><div class=dp-dwn-reg><div class=txtfir-reg><div class="cou-co-fl cou-co-fl-US"></div>Global<img src=https://nangjang.github.io/StockGo/assets/images/icon-arrow-down.png width=10 height=10></div><ul style=display:none><li class=in-op-reg><div class=in-op-reg-fx><div class=cou-fl><div class="cou-co-fl cou-co-fl-AO"></div></div>United Kingdom</div></li><li class=in-op-reg><div class=in-op-reg-fx><div class=cou-fl><div class="cou-co-fl cou-co-fl-AI"></div></div>United States</div></li><li class=in-op-reg><div class=in-op-reg-fx><div class=cou-fl><div class="cou-co-fl cou-co-fl-AG"></div></div>Australia</div></li><li class=in-op-reg><div class=in-op-reg-fx><div class=cou-fl><div class="cou-co-fl cou-co-fl-AR"></div></div>Global</div></li></ul></div><p style=margin-top:10px;color:#fff;font-size:14px>STOCKGO LLC,<br>Bellflower<br>CA 90706<br>USA</p><div><p class=pos-ftr-tit>Business Types</p></div><div class=pos-ftr-dpdwn><div class=pos-ftr-li><a class=pos-ftr-lk href="">Electronics &amp; Computer POS</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Fashion Boutique POS</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Health &amp; Beauty POS</a></div></div><div><p class=pos-ftr-tit>Policy</p></div><div class=pos-ftr-dpdwn><div class=pos-ftr-li><a class=pos-ftr-lk href="">Terms Of Use</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Privacy Policy</a></div><div class=pos-ftr-li><a class=pos-ftr-lk href="">Sitemap</a></div></div></div></div></div><div class=cr-wp><address>&copy; 2024 STOCKGO. All Rights Reserved.</address></div></div>'), e.put("app/components/navbar/navbar.html", "")
    }]);