// Array of all chemical elements and compounds
const allChemicals = [
"AgBrO",
"AgBrO2",
"AgBrO4",
"AgIO",
"AgIO2",
"AgIO4",
"AlCo",
"AlH3",
"Al(NO2)3",
"AuB",
"B(NO3)3",
"B2Mg",
"B4CaO7",
"B4H20Na2O17",
"Ba(BrO3)22H2O",
"Ba(BrO)2",
"Ba(BrO2)2",
"Ba(BrO4)2",
"Ba(HS)2",
"Ba(IO)2",
"Ba(IO2)2",
"Ba(OH)2",
"BaSO4",
"Ba(SeCN)2",
"BaTiO3",
"Ba2V2O7",
"Ba2XeO6",
"Be(ClO)2",
"Be(ClO3)2",
"Be(NO2)2",
"BeO",
"BeSO3",
"Bi(VO3)5",
"Bi2Se3",
"Bi2S3",
"BrCl3",
"BrCl5",
"BrF",
"BrF5",
"BrI",
"CAgO",
"CCl2F2",
"CCl4",
"CHCl3",
"CHNO",
"CH2",
"CH2Ag",
"CH3CH2OCH2CH3",
"CH3CONH2",
"CH3COOH",
"CH3Cl",
"CH3I",
"CH3OCs",
"CH3ORb",
"CH3SCH3",
"(CH3)2CHOH",
"CH4",
"C2H5NO2",
"C2H5OH",
"C2H5OCs",
"C2H5ORb",
"C2H6OS",
"C3HN",
"C3H7NO2S",
"C3H7NO3",
"C3H8O",
"C4H4",
"C4H4N4",
"C4H6N2",
"C4H6O2",
"C4H6O2",
"C4H6O2",
"C4H6O2",
"C4H6O2",
"C4H6O2",
"C4H6O3",
"C4H7KO3",
"C4H7NaO3",
"C4H7NO3",
"C4H7NO4",
"C4H8N2O3",
"C4H8O",
"C4H8O2",
"C4H9NO3",
"C4H10O2",
"C5H4O",
"C5H4O2",
"C5H6O",
"C5H9NO2",
"C5H9NO2",
"C5H9NO4",
"C5H10N2O3",
"C5H10O2",
"C5H10O2",
"C5H11NO2",
"C5H11NO2S",
"C6H4N4",
"C6H7CsO6",
"C6H7KO6",
"C6H7LiO6",
"C6H7NaO6",
"C6H7RbO6",
"C6H9N3O2",
"C6H10O4",
"C6H10O4",
"C6H10O4",
"C6H10O4",
"C6H10O4",
"C6H10O4",
"C6H14N2O2",
"C6H14N4O2",
"C6H14O3",
"C6H14O3",
"C6H14O4",
"C6H15NO3",
"C6N4",
"C7H6N2",
"C7H6O",
"C7H8N4O2",
"C7H12O4",
"C7H12N2O4",
"C7H14O6",
"C8H4F3IO2",
"C8H16O2",
"C8H16O6",
"C8H16O6",
"C8H16O6",
"C9H8O3",
"C9H8O4",
"C9H10O",
"C9H11NO2",
"C9H11NO3",
"C9H13N5O3",
"C9H14O3",
"C10H7N3S",
"C10H10O2",
"C10H12O",
"C10H12O",
"C10H12O2",
"C10H12O2",
"C10H12O2",
"C10H12O2",
"C10H12O3",
"C10H16",
"C10H20O2",
"C11H12N2O2",
"C11H12O3",
"C11H13NO6",
"C11H14O2",
"C11H14O2",
"(C12H14CaO12)n",
"C12H14O4",
"C12H14O4",
"C12H16O3",
"C12H16O3",
"C12H16O3",
"C12H16O3",
"C12H17N5O4S",
"C12H18N4O2",
"C13H14N2O",
"C14H14Cl2N2O",
"C16H14O3",
"C16H19NO5",
"C16H22FN5O3S",
"C17H13ClN4",
"C17H22O2",
"C17H22O2",
"C17H24O",
"C17H24O9",
"Syringin",
"C17H30O8",
"C18H12Cl2N2O",
"C18H16N2OS",
"C18H22O2",
"C18H23NO6",
"C18H24O2",
"C18H24O3",
"C18H24O4",
"C19H14O6",
"C19H22N2",
"C19H24N2O",
"C19H26O2",
"C19H28O2",
"C19H28O2",
"C19H30O2",
"C19H30O2",
"C20H17NO6",
"C20H22O7",
"C20H30O3",
"C20H32O5",
"C20H32O5",
"C20H34O5",
"C21H18FN5O5S",
"C21H20O6",
"C21H22N2O4",
"C21H24FN6O6P",
"C21H26O4",
"C22H28N2O",
"C22H30O8",
"C23H19ClF3NO3",
"C23H28N2O4",
"C24H17F6NO3",
"C26H32N6O11",
"C26H37N3O",
"C26H38O6",
"C27H27Cl2N5O3S",
"C29H42N10O9",
"C30H19NO9",
"C30H42O11",
"C30H46O6",
"C34H46O18",
"C35H42O14",
"C35H60O6",
"C36N2O6",
"C37H44O13",
"C37H48N2O8",
"C37H64O6",
"C40H48N6O10",
"C40H56",
"C41H50N2O10",
"C44H69N15O9S",
"C48H56N10O12S6",
"C55H74IN3O21S4",
"C58H84N12O26",
"C59H80N4O22S4",
"C61H60N14O18S5",
"C62H89CoN13O15P",
"C63H88CoN14O14P",
"C63H91CoN13O14P",
"C72H100CoN18O17P",
"C77H101N17O26",
"C131H200N30O43S2",
"C161H236N42O48",
"C169719H270466N45688O52238S911",
"Ca(BrO)2",
"Ca(BrO2)2",
"Ca(BrO4)2",
"CaCO3",
"Ca(ClO2)2",
"CaF2",
"Ca(IO)2",
"Ca(IO2)2",
"Ca(IO4)2",
"Ca(NbO3)2",
"CaO",
"Ca(OH)2",
"CaS",
"CaSiO3",
"Ca(VO4)2",
"Ca5(PO4)3(OH)",
"CdS",
"CdSe",
"CdZrO3",
"CeO2",
"Cl2O8",
"Co(C18H33O2)2",
"Co3(AsO4)2",
"Cr(NO2)3",
"CrVO4",
"Cr2O3",
"Cr2Se3",
"Cr2(TeO4)3",
"Cr3As2",
"Cr3Sb2",
"CsBrO",
"CsBrO2",
"CsBrO4",
"CsCNO",
"CsCNO",
"CsClO",
"CsClO2",
"CsHS",
"CsIO",
"CsIO2",
"Cs2NbO3",
"Cs2O2",
"CsH2PO3",
"CsHSO3",
"Cs2HPO4",
"Cs2SO3",
"Cs2TiO3",
"Cs2HPO3",
"Cs2HPO4",
"Cs3PO3",
"Cu(BrO3)2.6H2O",
"CuFeS2",
"CuFe2S3",
"[Cu(H2O)4]SO4.H2O",
"CuIO3",
"CuMoO4",
"Cu(NbO3)2",
"CuS",
"CuSeO4.5H2O",
"CuSiO3",
"Cu2S",
"Cu9S5",
"DI",
"F2O5S3",
"FeAsS",
"FeBr3.6H2O",
"FeC5O5",
"FeI2",
"FeO",
"Fe(SCN)3",
"FeO4Se",
"FeO8H4P2",
"FeS",
"Fe2S3",
"FeS2",
"FeVO4",
"FeZrO3",
"Fe2O3",
"Fe2O12S3",
"Fe2O12W3",
"Fe3H2Na2O45Si",
"Fe3O4",
"Fe4(P2O7)3",
"Fe7Si8O24H2",
"GaAsO4",
"GaI2",
"GaPO4",
"Ga2(SO4)3.18H2O",
"HArF",
"HAt",
"HBr",
"HBrO2",
"HBrO3",
"HBrO4",
"HCCH",
"HCN",
"HCNO",
"HCONH2",
"HCOOH",
"HC12H17ON4SCl2",
"HCl",
"HDO",
"HIO2",
"HNCO",
"HNO3",
"HTO",
"H2C8H4O4",
"H2Ph",
"H2S",
"H2SO4",
"H2S2O2",
"H2S2O5",
"H2TiO3",
"H3PO2",
"H3PO3",
"H4XeO6",
"HfOH(C2H3O2)3",
"Hg(BrO3)2.2H2O",
"Hg(C7H5O2)2.H2O",
"HgClO4.4H2O",
"Hg(ClO4)2.3H2O",
"HgNa",
"Hg(OH)2",
"HgS",
"HgSeO3",
"HgTeO3",
"IO3",
"InBrI2",
"InBr2I",
"InCl2",
"In(IO3)3",
"InI2",
"KAsO2",
"KH2AsO4",
"KBrO",
"KBrO2",
"KCNO",
"KCNO",
"K2HAsO4",
"K2HPO3",
"K3PO3",
"KOF",
"KH",
"KHS",
"KH2PO3",
"KH2PO4",
"KIO",
"KIO2",
"KIO3",
"K2N2O2",
"LaBr3",
"LaI3",
"La2O3",
"La(OH)3",
"LiAlH4",
"Li(AlSi2O6)",
"LiBH4",
"LiBr.2H2O",
"LiBrO",
"LiBrO2",
"LiBrO4",
"LiClO2",
"LiCNO",
"LiH",
"LiHS",
"LiHSO3",
"LiH2AsO4",
"LiH2PO3",
"LiH2PO4",
"LiIO",
"LiIO2",
"LiIO4",
"LiNa",
"LiNaNO2",
"LiNbO3",
"LiNO3.H2O",
"LiTaO3",
"LiVO3.2H2O",
"Li2HAsO4",
"Li2HPO3",
"Li2HPO4",
"Li2MoO4",
"Li2N2O2",
"Li2TiO3",
"Li2WO4",
"Li2ZrO3",
"Li3AsO4",
"Li3PO3",
"Li3PO4",
"Mg(BrO)2",
"Mg(BrO2)2",
"Mg(BrO3)2",
"Mg(BrO4)2",
"MgCO3",
"Mg(ClO2)2",
"Mg(ClO3)2.xH2O",
"MgCrO4.5H2O",
"MgHPO4",
"Mg(IO)2",
"Mg(IO2)2",
"Mg(IO3)2",
"Mg(IO4)2",
"Mg(NO2)2",
"MgO",
"Mg(OH)2",
"MgPo",
"MgSiO3",
"Mg(VO3)2",
"Mg2Al(AlSiO5)(OH)4",
"Mg3(VO4)2",
"MnAs",
"MnBi",
"MnMoO4",
"MnO2",
"MnPb8(Si2O7)3",
"MnZrO3",
"Mn3As2",
"Mn3O4",
"Mn3P2",
"Mn3Sb2",
"MoS2",
"NHCl2",
"NH2Cl",
"NH2CH2CN",
"NH2COOH",
"(NH2)2CO·HClO4",
"(NH4)3N",
"NH4OH",
"(NH4)2Ce(NO3)6",
"(NH4)2Hg(SCN)4",
"NO",
"NOCl",
"NOBr",
"NOI",
"NO2",
"N2O",
"N2O3",
"N2O4",
"N2O5",
"NaAlSi3O3",
"NaH2AsO4",
"Na[B(NO3)4]",
"NaBrO",
"NaBrO2",
"NaBrO3",
"NaBrO4",
"NaCNO",
"NaCNO",
"NaC6F5COO",
"NaCa2(Al5Si5O20).6H2O",
"NaCl",
"NaOF",
"NaHCO3",
"NaHS",
"NaH2PO3",
"NaH2PO4",
"NaIO",
"NaIO2",
"NaIO3",
"NaIO4",
"NaNbO3",
"NaNbO3.7H2O",
"NaSeO3",
"NaTaO3",
"Na2CO3",
"Na2HAsO4",
"Na2HPO3",
"Na2HPO4",
"Na2N2O2",
"Na2SO4",
"Na2TeO4",
"Na2TiO3",
"Na2ZrO3",
"Na3AsO4",
"Na3[Co(CO3)3]",
"Na3C6H5O7",
"Na3PO3",
"Na3PO4",
"Nb2O3",
"NdAsO4",
"NdCl2",
"NdI2",
"NdI3",
"Nd2O3",
"NiAsS",
"NiBr2.6H2O",
"Ni(CO)3",
"NiFe2O4",
"Ni(H2PO)2.6H2O",
"NiMoO4",
"NiS",
"NiSb",
"NiTiO3",
"Ni(VO3)2",
"NiWO4",
"Ni2SiO4",
"Ni3Sb2",
"OV",
"O2Ti",
"O2U",
"O3U",
"Pb(N3)2",
"Pb(OH)4",
"Pb2",
"PoCl2",
"PoO",
"PoO3",
"RbBrO",
"RbBrO2",
"RbBrO3",
"RbBrO4",
"RbClO",
"RbClO2",
"RbCNO",
"RbCNO",
"RbH",
"RbH2PO3",
"RbH2PO4",
"RbHS",
"RbIO",
"RbIO2",
"RbIO3",
"RbIO4",
"Rb2O2",
"Rb2S",
"Rb2SO3",
"Rb2HPO3",
"Rb2HPO4",
"Rb3PO3",
"Rb3PO4",
"RbHCO3",
"RbHSO3",
"RbNbO3",
"RbNO2",
"RnF2",
"SbPO4",
"Sb2OS2",
"Sb2Se5",
"Sb2Te3",
"Sc2O3",
"SeCl",
"SiO2",
"SnBrCl3",
"SnBr2Cl2",
"Sn(CH3COO)2",
"Sn(CH3COO)4",
"SnCl2I2",
"Sn(OH)2",
"Sn(OH)4",
"SnO",
"Sn(SO4)2.2H2O",
"SnTe4",
"Sn(VO3)2",
"Sn3Sb4",
"Sr(ClO)2",
"Sr(ClO2)2",
"Sr(ClO3)2",
"Sr(ClO4)2",
"SrHfO3",
"Sr(HS)2",
"Sr(IO)2",
"Sr(IO2)2",
"Sr(IO3)2",
"Sr(IO4)2",
"Sr(MnO4)2",
"Sr(NbO3)2",
"Sr(OH)2",
"Sr2RuO4",
"SrTiO3",
"T2O",
"TaBr3",
"TeI2",
"ThO2",
"Th(SO4)2",
"TiCl2I2",
"TiCl3I",
"TiH2",
"TiO2",
"TlI3",
"TiO(NO3)2.xH2O",
"Tl2MoO4",
"Tl2SeO3",
"Tl2TeO3",
"Tl2WO4",
"Tl3As",
"Tm(NO3)3",
"Tm2(SO4)3",
"UI3",
"UO2SO4",
"VBr2",
"VOC2O4",
"XeF",
"XeO2",
"XeO2F2",
"XeRhF6",
"Y2O3",
"Yb(ClO4)3",
"YbPO4",
"ZnMoO4",
"Zn(NbO3)2",
"ZnO",
"ZnS",
"Zn(SeCN)2",
"ZnSO3",
"ZnS2O3",
"ZnSeO4",
"Zn(TaO3)2",
"ZnTeO3",
"ZnTeO4",
"ZnTiO3",
"Zn(VO3)2",
"ZnWO4",
"ZnZrO3",
"Zn3Sb2",
"Zr(NO3)4",
"ZrO2",
"H",
"He",
"Li",
"Be",
"B",
"C",
"N",
"O",
"F",
"Ne",
"Na",
"Mg",
"Al",
"Si",
"P",
"S",
"Cl",
"Ar",
"K",
"Ca",
"Sc",
"Ti",
"V",
"Cr",
"Mn",
"Fe",
"Co",
"Ni",
"Cu",
"Zn",
"Ga",
"Ge",
"As",
"Se",
"Br",
"Kr",
"Rb",
"Sr",
"Y",
"Zr",
"Nb",
"Mo",
"Tc",
"Ru",
"Rh",
"Pd",
"Ag",
"Cd",
"In",
"Sn",
"Sb",
"Te",
"I",
"Xe",
"Cs",
"Ba",
"La",
"Ce",
"Pr",
"Nd",
"Pm",
"Sm",
"Eu",
"Gd",
"Tb",
"Dy",
"Ho",
"Er",
"Tm",
"Yb",
"Lu",
"Hf",
"Ta",
"W",
"Re",
"Os",
"Ir",
"Pt",
"Au",
"Hg",
"Tl",
"Pb",
"Bi",
"Po",
"At",
"Rn",
"Fr",
"Ra",
"Ac",
"Th",
"Pa",
"U",
"Np",
"Pu",
"Am",
"Cm",
"Bk",
"Cf",
"Es",
"Fm",
"Md",
"No",
"Lr",
"Rf",
"Db",
"Sg",
"Bh",
"Hs",
"Mt",
"Ds",
"Rg",
"Cn",
"Nh",
"Fl",
"Mc",
"Lv",
"Ts",
"Og",
]


/*
 * Chemical equation balancer (compiled from TypeScript)
 *
 * Copyright (c) 2022 Project Nayuki
 * All rights reserved. Contact Nayuki for licensing.
 * https://www.nayuki.io/page/chemical-equation-balancer-javascript
 */
"use strict";
/*---- Entry point functions from HTML GUI ----*/
const formulaElem = document.getElementById("inputFormula");
// Balances the given formula string and sets the HTML output on the page. Returns nothing.
function doBalance() {
    // Clear output
    const msgElem = document.getElementById("message");
    const balancedElem = document.getElementById("balanced");
    const codeOutElem = document.getElementById("codeOutput");
    msgElem.textContent = "";
    while (balancedElem.firstChild !== null)
        balancedElem.removeChild(balancedElem.firstChild);
    while (codeOutElem.firstChild !== null)
        codeOutElem.removeChild(codeOutElem.firstChild);
    codeOutElem.textContent = " ";
    // Parse equation
    const formulaStr = formulaElem.value;
    let eqn;
    try {
        eqn = new Parser(formulaStr).parseEquation();
    }
    catch (e) {
        if (e instanceof ParseError) { // Error message object with start and possibly end character indices
            msgElem.textContent = "Syntax error: " + e.message;
            const start = e.start;
            let end = e.end !== undefined ? e.end : e.start;
            while (end > start && [" ", "\t"].includes(formulaStr.charAt(end - 1)))
                end--; // Adjust position to eliminate whitespace
            if (start == end)
                end++;
            codeOutElem.textContent = formulaStr.substring(0, start);
            if (end <= formulaStr.length) {
                codeOutElem.append(createElem("u", formulaStr.substring(start, end)));
                codeOutElem.append(formulaStr.substring(end, formulaStr.length));
            }
            else
                codeOutElem.append(createElem("u", " "));
        }
        else if (e instanceof Error) { // Simple error message string
            msgElem.textContent = "Syntax error: " + e.message;
        }
        else {
            msgElem.textContent = "Assertion error";
        }
        return;
    }
    try {
        let matrix = buildMatrix(eqn); // Set up matrix
        solve(matrix); // Solve linear system
        const coefs = extractCoefficients(matrix); // Get coefficients
        checkAnswer(eqn, coefs); // Self-test, should not fail
        balancedElem.append(eqn.toHtml(coefs)); // Display balanced equation
    }
    catch (e) {
        msgElem.textContent = e.message;
    }
}
// Sets the input box to the given formula string and balances it. Returns nothing.
function doDemo(formulaStr) {
    formulaElem.value = formulaStr;
    doBalance();
}
const RANDOM_DEMOS = [
    "H2 + O2 = H2O",
    "Fe + O2 = Fe2O3",
    "NH3 + O2 = N2 + H2O",
    "C2H2 + O2 = CO2 + H2O",
    "C3H8O + O2 = CO2 + H2O",
    "Na + O2 = Na2O",
    "P + O2 = P2O5",
    "Na2O + H2O = NaOH",
    "Mg + HCl = MgCl2 + H2",
    "Cu(OH)2 + HCl = CuCl2 + H2O",
    "MgCl2 + KOH = Mg(OH)2 + KCl",
    "HNO3 + Cu = Cu(NO3)2 + H2O + NO",
    "Cu(OH)2 + H2SO4 = CuSO4 + H2O",
    "AgNO3 + BaCl2 = Ba(NO3)2 + AgCl",
    "Cu(NO3)2 = CuO + NO2 + O2",
    "Al + CuSO4 = Al2(SO4)3 + Cu",
    "Na3PO4 + Zn(NO3)2 = NaNO3 + Zn3(PO4)2",
    "N2 + O2 = NO",
    "FeO + HCl = FeCl2 + H2O",
    "Fe2O3 + H2SO4 = Fe2(SO4)3 + H2O",
    "NO + O2 = NO2",
    "KMnO4 = K2MnO4 + MnO2 + O2",
    "KClO3 = KCl + O2",
    "NO + O2 + H2O = HNO3",
    "Ag + HNO3 = AgNO3 + NO + H2O",
    "P2O5 + H2O = H3PO4",
    "Fe(OH)3 = Fe2O3 + H2O",
    "NaOH + CO2 = Na2CO3 + H2O",
    "HCl + Fe3O4 = FeCl3 + FeCl2 + H2O",
];
let lastRandomIndex = -1;
function doRandom() {
    let index;
    do {
        index = Math.floor(Math.random() * RANDOM_DEMOS.length);
        index = Math.max(Math.min(index, RANDOM_DEMOS.length - 1), 0);
    } while (RANDOM_DEMOS.length >= 2 && index == lastRandomIndex);
    lastRandomIndex = index;
    doDemo(RANDOM_DEMOS[index]);
}
/*---- Text formula parser classes ----*/
class Parser {
    constructor(formulaStr) {
        this.tok = new Tokenizer(formulaStr);
    }
    // Parses and returns an equation.
    parseEquation() {
        let lhs = [this.parseTerm()];
        while (true) {
            const next = this.tok.peek();
            if (next == "+") {
                this.tok.consume(next);
                lhs.push(this.parseTerm());
            }
            else if (next == "=") {
                this.tok.consume(next);
                break;
            }
            else
                throw new ParseError("Plus or equal sign expected", this.tok.pos);
        }
        let rhs = [this.parseTerm()];
        while (true) {
            const next = this.tok.peek();
            if (next === null)
                break;
            else if (next == "+") {
                this.tok.consume(next);
                rhs.push(this.parseTerm());
            }
            else
                throw new ParseError("Plus or end expected", this.tok.pos);
        }
        return new Equation(lhs, rhs);
    }
    // Parses and returns a term.
    parseTerm() {
        const startPos = this.tok.pos;
        // Parse groups and elements
        let items = [];
        let electron = false;
        let next;
        while (true) {
            next = this.tok.peek();
            if (next == "(")
                items.push(this.parseGroup());
            else if (next == "e") {
                this.tok.consume(next);
                electron = true;
            }
            else if (next !== null && /^[A-Z][a-z]*$/.test(next))
                items.push(this.parseElement());
            else if (next !== null && /^[0-9]+$/.test(next))
                throw new ParseError("Invalid term - number not expected", this.tok.pos);
            else
                break;
        }
        // Parse optional charge
        let charge = null;
        if (next == "^") {
            this.tok.consume(next);
            next = this.tok.peek();
            if (next === null)
                throw new ParseError("Number or sign expected", this.tok.pos);
            else {
                charge = this.parseOptionalNumber();
                next = this.tok.peek();
            }
            if (next == "+")
                charge = +charge; // No-op
            else if (next == "-")
                charge = -charge;
            else
                throw new ParseError("Sign expected", this.tok.pos);
            this.tok.take(); // Consume the sign
        }
        // Check and postprocess term
        if (electron) {
            if (items.length > 0)
                throw new ParseError("Invalid term - electron needs to stand alone", startPos, this.tok.pos);
            if (charge === null) // Allow omitting the charge
                charge = -1;
            if (charge != -1)
                throw new ParseError("Invalid term - invalid charge for electron", startPos, this.tok.pos);
        }
        else {
            if (items.length == 0)
                throw new ParseError("Invalid term - empty", startPos, this.tok.pos);
            if (charge === null)
                charge = 0;
        }
        return new Term(items, charge);
    }
    // Parses and returns a group.
    parseGroup() {
        const startPos = this.tok.pos;
        this.tok.consume("(");
        let items = [];
        while (true) {
            const next = this.tok.peek();
            if (next == "(")
                items.push(this.parseGroup());
            else if (next !== null && /^[A-Z][a-z]*$/.test(next))
                items.push(this.parseElement());
            else if (next == ")") {
                this.tok.consume(next);
                if (items.length == 0)
                    throw new ParseError("Empty group", startPos, this.tok.pos);
                break;
            }
            else
                throw new ParseError("Element, group, or closing parenthesis expected", this.tok.pos);
        }
        return new Group(items, this.parseOptionalNumber());
    }
    // Parses and returns an element.
    parseElement() {
        const name = this.tok.take();
        if (!/^[A-Z][a-z]*$/.test(name))
            throw new Error("Assertion error");
        return new ChemElem(name, this.parseOptionalNumber());
    }
    // Parses a number if it's the next token, returning a non-negative integer, with a default of 1.
    parseOptionalNumber() {
        const next = this.tok.peek();
        if (next !== null && /^[0-9]+$/.test(next))
            return checkedParseInt(this.tok.take());
        else
            return 1;
    }
}
// Tokenizes a formula into a stream of token strings.
class Tokenizer {
    constructor(str) {
        this.str = str.replace(/\u2212/g, "-");
        this.pos = 0;
        this.skipSpaces();
    }
    // Returns the next token as a string, or null if the end of the token stream is reached.
    peek() {
        if (this.pos == this.str.length) // End of stream
            return null;
        const match = /^([A-Za-z][a-z]*|[0-9]+|[+\-^=()])/.exec(this.str.substring(this.pos));
        if (match === null)
            throw new ParseError("Invalid symbol", this.pos);
        return match[0];
    }
    // Returns the next token as a string and advances this tokenizer past the token.
    take() {
        const result = this.peek();
        if (result === null)
            throw new Error("Advancing beyond last token");
        this.pos += result.length;
        this.skipSpaces();
        return result;
    }
    // Takes the next token and checks that it matches the given string, or throws an exception.
    consume(s) {
        if (this.take() != s)
            throw new Error("Token mismatch");
    }
    skipSpaces() {
        const match = /^[ \t]*/.exec(this.str.substring(this.pos));
        if (match === null)
            throw new Error("Assertion error");
        this.pos += match[0].length;
    }
}
class ParseError extends Error {
    constructor(message, start, end) {
        super(message);
        this.start = start;
        this.end = end;
        Object.setPrototypeOf(this, ParseError.prototype); // ECMAScript 5 compatibility
    }
}
/*---- Chemical equation data types ----*/
// A complete chemical equation. It has a left-hand side list of terms and a right-hand side list of terms.
// For example: H2 + O2 -> H2O.
class Equation {
    constructor(lhs, rhs) {
        // Make defensive copies
        this.leftSide = lhs.slice();
        this.rightSide = rhs.slice();
    }
    // Returns an array of the names all of the elements used in this equation.
    // The array represents a set, so the items are in an arbitrary order and no item is repeated.
    getElements() {
        const result = new Set();
        for (const item of this.leftSide.concat(this.rightSide))
            item.getElements(result);
        return Array.from(result);
    }
    // Returns an HTML element representing this equation.
    // 'coefs' is an optional argument, which is an array of coefficients to match with the terms.
    toHtml(coefs) {
        if (coefs !== undefined && coefs.length != this.leftSide.length + this.rightSide.length)
            throw new RangeError("Mismatched number of coefficients");
        let node = document.createDocumentFragment();
        let j = 0;
        function termsToHtml(terms) {
            let head = true;
            for (const term of terms) {
                const coef = coefs !== undefined ? coefs[j] : 1;
                if (coef != 0) {
                    if (head)
                        head = false;
                    else
                        node.append(createSpan("plus", " + "));
                    if (coef != 1) {
                        let span = createSpan("coefficient", coef.toString().replace(/-/, MINUS));
                        if (coef < 0)
                            span.classList.add("negative");
                        node.append(span);
                    }
                    node.append(term.toHtml());
                }
                j++;
            }
        }
        termsToHtml(this.leftSide);
        node.append(createSpan("rightarrow", " \u2192 "));
        termsToHtml(this.rightSide);
        return node;
    }
}
// A term in a chemical equation. It has a list of groups or elements, and a charge.
// For example: H3O^+, or e^-.
class Term {
    constructor(items, charge) {
        if (items.length == 0 && charge != -1)
            throw new RangeError("Invalid term"); // Electron case
        this.items = items.slice();
        this.charge = charge;
    }
    getElements(resultSet) {
        resultSet.add("e");
        for (const item of this.items)
            item.getElements(resultSet);
    }
    // Counts the number of times the given element (specified as a string) occurs in this term, taking groups and counts into account, returning an integer.
    countElement(name) {
        if (name == "e") {
            return -this.charge;
        }
        else {
            let sum = 0;
            for (const item of this.items)
                sum = checkedAdd(sum, item.countElement(name));
            return sum;
        }
    }
    // Returns an HTML element representing this term.
    toHtml() {
        let node = createSpan("term");
        if (this.items.length == 0 && this.charge == -1) {
            node.textContent = "e";
            node.append(createElem("sup", MINUS));
        }
        else {
            for (const item of this.items)
                node.append(item.toHtml());
            if (this.charge != 0) {
                let s;
                if (Math.abs(this.charge) == 1)
                    s = "";
                else
                    s = Math.abs(this.charge).toString();
                if (this.charge > 0)
                    s += "+";
                else
                    s += MINUS;
                node.append(createElem("sup", s));
            }
        }
        return node;
    }
}
// A group in a term. It has a list of groups or elements.
// For example: (OH)3
class Group {
    constructor(items, count) {
        if (count < 1)
            throw new RangeError("Assertion error: Count must be a positive integer");
        this.items = items.slice();
        this.count = count;
    }
    getElements(resultSet) {
        for (const item of this.items)
            item.getElements(resultSet);
    }
    countElement(name) {
        let sum = 0;
        for (const item of this.items)
            sum = checkedAdd(sum, checkedMultiply(item.countElement(name), this.count));
        return sum;
    }
    // Returns an HTML element representing this group.
    toHtml() {
        let node = createSpan("group", "(");
        for (const item of this.items)
            node.append(item.toHtml());
        node.append(")");
        if (this.count != 1)
            node.append(createElem("sub", this.count.toString()));
        return node;
    }
}
// A chemical element.
// For example: Na, F2, Ace, Uuq6
class ChemElem {
    constructor(name, count) {
        this.name = name;
        this.count = count;
        if (count < 1)
            throw new RangeError("Assertion error: Count must be a positive integer");
        if (!allChemicals.includes(name)) 
            throw new Error("Invalid chemical(s)")
    }
    getElements(resultSet) {
        resultSet.add(this.name);
    }
    countElement(n) {
        return n == this.name ? this.count : 0;
    }
    // Returns an HTML element representing this element.
    toHtml() {
        let node = createSpan("element", this.name);
        if (this.count != 1)
            node.append(createElem("sub", this.count.toString()));
        return node;
    }
}
/*---- Core number-processing fuctions ----*/
// A matrix of integers.
class Matrix {
    constructor(numRows, numCols) {
        this.numRows = numRows;
        this.numCols = numCols;
        if (numRows < 0 || numCols < 0)
            throw new RangeError("Illegal argument");
        // Initialize with zeros
        let row = [];
        for (let j = 0; j < numCols; j++)
            row.push(0);
        this.cells = []; // Main data (the matrix)
        for (let i = 0; i < numRows; i++)
            this.cells.push(row.slice());
    }
    /* Accessor functions */
    // Returns the value of the given cell in the matrix, where r is the row and c is the column.
    get(r, c) {
        if (r < 0 || r >= this.numRows || c < 0 || c >= this.numCols)
            throw new RangeError("Index out of bounds");
        return this.cells[r][c];
    }
    // Sets the given cell in the matrix to the given value, where r is the row and c is the column.
    set(r, c, val) {
        if (r < 0 || r >= this.numRows || c < 0 || c >= this.numCols)
            throw new RangeError("Index out of bounds");
        this.cells[r][c] = val;
    }
    /* Private helper functions for gaussJordanEliminate() */
    // Swaps the two rows of the given indices in this matrix. The degenerate case of i == j is allowed.
    swapRows(i, j) {
        if (i < 0 || i >= this.numRows || j < 0 || j >= this.numRows)
            throw new RangeError("Index out of bounds");
        const temp = this.cells[i];
        this.cells[i] = this.cells[j];
        this.cells[j] = temp;
    }
    // Returns a new row that is the sum of the two given rows. The rows are not indices.
    // For example, addRow([3, 1, 4], [1, 5, 6]) = [4, 6, 10].
    static addRows(x, y) {
        let z = [];
        for (let i = 0; i < x.length; i++)
            z.push(checkedAdd(x[i], y[i]));
        return z;
    }
    // Returns a new row that is the product of the given row with the given scalar. The row is is not an index.
    // For example, multiplyRow([0, 1, 3], 4) = [0, 4, 12].
    static multiplyRow(x, c) {
        return x.map(val => checkedMultiply(val, c));
    }
    // Returns the GCD of all the numbers in the given row. The row is is not an index.
    // For example, gcdRow([3, 6, 9, 12]) = 3.
    static gcdRow(x) {
        let result = 0;
        for (const val of x)
            result = gcd(val, result);
        return result;
    }
    // Returns a new row where the leading non-zero number (if any) is positive, and the GCD of the row is 0 or 1.
    // For example, simplifyRow([0, -2, 2, 4]) = [0, 1, -1, -2].
    static simplifyRow(x) {
        let sign = 0;
        for (const val of x) {
            if (val != 0) {
                sign = Math.sign(val);
                break;
            }
        }
        if (sign == 0)
            return x.slice();
        const g = Matrix.gcdRow(x) * sign;
        return x.map(val => val / g);
    }
    // Changes this matrix to reduced row echelon form (RREF), except that each leading coefficient is not necessarily 1. Each row is simplified.
    gaussJordanEliminate() {
        // Simplify all rows
        let cells = this.cells = this.cells.map(Matrix.simplifyRow);
        // Compute row echelon form (REF)
        let numPivots = 0;
        for (let i = 0; i < this.numCols; i++) {
            // Find pivot
            let pivotRow = numPivots;
            while (pivotRow < this.numRows && cells[pivotRow][i] == 0)
                pivotRow++;
            if (pivotRow == this.numRows)
                continue;
            const pivot = cells[pivotRow][i];
            this.swapRows(numPivots, pivotRow);
            numPivots++;
            // Eliminate below
            for (let j = numPivots; j < this.numRows; j++) {
                const g = gcd(pivot, cells[j][i]);
                cells[j] = Matrix.simplifyRow(Matrix.addRows(Matrix.multiplyRow(cells[j], pivot / g), Matrix.multiplyRow(cells[i], -cells[j][i] / g)));
            }
        }
        // Compute reduced row echelon form (RREF), but the leading coefficient need not be 1
        for (let i = this.numRows - 1; i >= 0; i--) {
            // Find pivot
            let pivotCol = 0;
            while (pivotCol < this.numCols && cells[i][pivotCol] == 0)
                pivotCol++;
            if (pivotCol == this.numCols)
                continue;
            const pivot = cells[i][pivotCol];
            // Eliminate above
            for (let j = i - 1; j >= 0; j--) {
                const g = gcd(pivot, cells[j][pivotCol]);
                cells[j] = Matrix.simplifyRow(Matrix.addRows(Matrix.multiplyRow(cells[j], pivot / g), Matrix.multiplyRow(cells[i], -cells[j][pivotCol] / g)));
            }
        }
    }
}
// Returns a matrix based on the given equation object.
function buildMatrix(eqn) {
    let elems = eqn.getElements();
    let lhs = eqn.leftSide;
    let rhs = eqn.rightSide;
    let matrix = new Matrix(elems.length + 1, lhs.length + rhs.length + 1);
    elems.forEach((elem, i) => {
        let j = 0;
        for (const term of lhs) {
            matrix.set(i, j, term.countElement(elem));
            j++;
        }
        for (const term of rhs) {
            matrix.set(i, j, -term.countElement(elem));
            j++;
        }
    });
    return matrix;
}
function solve(matrix) {
    matrix.gaussJordanEliminate();
    function countNonzeroCoeffs(row) {
        let count = 0;
        for (let i = 0; i < matrix.numCols; i++) {
            if (matrix.get(row, i) != 0)
                count++;
        }
        return count;
    }
    // Find row with more than one non-zero coefficient
    let i;
    for (i = 0; i < matrix.numRows - 1; i++) {
        if (countNonzeroCoeffs(i) > 1)
            break;
    }
    if (i == matrix.numRows - 1)
        throw new RangeError("All-zero solution"); // Unique solution with all coefficients zero
    // Add an inhomogeneous equation
    matrix.set(matrix.numRows - 1, i, 1);
    matrix.set(matrix.numRows - 1, matrix.numCols - 1, 1);
    matrix.gaussJordanEliminate();
}
function extractCoefficients(matrix) {
    const rows = matrix.numRows;
    const cols = matrix.numCols;
    if (cols - 1 > rows || matrix.get(cols - 2, cols - 2) == 0)
        throw new RangeError("Multiple independent solutions");
    let lcm = 1;
    for (let i = 0; i < cols - 1; i++)
        lcm = checkedMultiply(lcm / gcd(lcm, matrix.get(i, i)), matrix.get(i, i));
    let coefs = [];
    for (let i = 0; i < cols - 1; i++)
        coefs.push(checkedMultiply(lcm / matrix.get(i, i), matrix.get(i, cols - 1)));
    if (coefs.every(x => x == 0))
        throw new RangeError("Assertion error: All-zero solution");
    return coefs;
}
// Throws an exception if there's a problem, otherwise returns silently.
function checkAnswer(eqn, coefs) {
    if (coefs.length != eqn.leftSide.length + eqn.rightSide.length)
        throw new Error("Assertion error: Mismatched length");
    function isZero(x) {
        if (typeof x != "number" || isNaN(x) || Math.floor(x) != x)
            throw new Error("Assertion error: Not an integer");
        return x == 0;
    }
    if (coefs.every(isZero))
        throw new Error("Assertion error: All-zero solution");
    for (const elem of eqn.getElements()) {
        let sum = 0;
        let j = 0;
        for (const term of eqn.leftSide) {
            sum = checkedAdd(sum, checkedMultiply(term.countElement(elem), coefs[j]));
            j++;
        }
        for (const term of eqn.rightSide) {
            sum = checkedAdd(sum, checkedMultiply(term.countElement(elem), -coefs[j]));
            j++;
        }
        if (sum != 0)
            throw new Error("Assertion error: Incorrect balance");
    }
}
/*---- Simple math functions ----*/
const INT_MAX = 9007199254740992; // 2^53
// Returns the given string parsed into a number, or throws an exception if the result is too large.
function checkedParseInt(str) {
    const result = parseInt(str, 10);
    if (isNaN(result))
        throw new RangeError("Not a number");
    return checkOverflow(result);
}
// Returns the sum of the given integers, or throws an exception if the result is too large.
function checkedAdd(x, y) {
    return checkOverflow(x + y);
}
// Returns the product of the given integers, or throws an exception if the result is too large.
function checkedMultiply(x, y) {
    return checkOverflow(x * y);
}
// Throws an exception if the given integer is too large, otherwise returns it.
function checkOverflow(x) {
    if (Math.abs(x) >= INT_MAX)
        throw new RangeError("Arithmetic overflow");
    return x;
}
// Returns the greatest common divisor of the given integers.
function gcd(x, y) {
    if (typeof x != "number" || typeof y != "number" || isNaN(x) || isNaN(y))
        throw new Error("Invalid argument");
    x = Math.abs(x);
    y = Math.abs(y);
    while (y != 0) {
        const z = x % y;
        x = y;
        y = z;
    }
    return x;
}
/*---- Miscellaneous code ----*/
// Unicode character constants (because this script file's character encoding is unspecified)
const MINUS = "\u2212"; // Minus sign
// Returns a new DOM element with the given tag name, with the optional given text content.
function createElem(tagName, text) {
    let result = document.createElement(tagName);
    if (text !== undefined)
        result.textContent = text;
    return result;
}
// Returns a new DOM node like this: <span class="cls">text</span>
function createSpan(cls, text) {
    let result = createElem("span", text);
    result.className = cls;
    return result;
}
