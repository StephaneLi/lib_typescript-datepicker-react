

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var reactFontawesome = require('@fortawesome/react-fontawesome');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

exports.__assign = function() {
    exports.__assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return exports.__assign.apply(this, arguments);
};

var i18n = {
	"ar-SA": {
		months: [
			"كانون الثاني",
			"شباط",
			"آذار",
			"نيسان",
			"مايو",
			"حزيران",
			"تموز",
			"آب",
			"أيلول",
			"تشرين الأول",
			"تشرين الثاني",
			"كانون الأول"
		],
		dayOfWeekShort: [
			"ن",
			"ث",
			"ع",
			"خ",
			"ج",
			"س",
			"ح"
		],
		dayOfWeek: [
			"الأحد",
			"الاثنين",
			"الثلاثاء",
			"الأربعاء",
			"الخميس",
			"الجمعة",
			"السبت",
			"الأحد"
		]
	},
	"ro-RO": {
		months: [
			"Ianuarie",
			"Februarie",
			"Martie",
			"Aprilie",
			"Mai",
			"Iunie",
			"Iulie",
			"August",
			"Septembrie",
			"Octombrie",
			"Noiembrie",
			"Decembrie"
		],
		dayOfWeekShort: [
			"Du",
			"Lu",
			"Ma",
			"Mi",
			"Jo",
			"Vi",
			"Sâ"
		],
		dayOfWeek: [
			"Duminică",
			"Luni",
			"Marţi",
			"Miercuri",
			"Joi",
			"Vineri",
			"Sâmbătă"
		]
	},
	"id-ID": {
		months: [
			"Januari",
			"Februari",
			"Maret",
			"April",
			"Mei",
			"Juni",
			"Juli",
			"Agustus",
			"September",
			"Oktober",
			"November",
			"Desember"
		],
		dayOfWeekShort: [
			"Min",
			"Sen",
			"Sel",
			"Rab",
			"Kam",
			"Jum",
			"Sab"
		],
		dayOfWeek: [
			"Minggu",
			"Senin",
			"Selasa",
			"Rabu",
			"Kamis",
			"Jumat",
			"Sabtu"
		]
	},
	"de-DE": {
		months: [
			"Janúar",
			"Febrúar",
			"Mars",
			"Apríl",
			"Maí",
			"Júní",
			"Júlí",
			"Ágúst",
			"September",
			"Október",
			"Nóvember",
			"Desember"
		],
		dayOfWeekShort: [
			"Sun",
			"Mán",
			"Þrið",
			"Mið",
			"Fim",
			"Fös",
			"Lau"
		],
		dayOfWeek: [
			"Sunnudagur",
			"Mánudagur",
			"Þriðjudagur",
			"Miðvikudagur",
			"Fimmtudagur",
			"Föstudagur",
			"Laugardagur"
		]
	},
	"bg-BG": {
		months: [
			"Януари",
			"Февруари",
			"Март",
			"Април",
			"Май",
			"Юни",
			"Юли",
			"Август",
			"Септември",
			"Октомври",
			"Ноември",
			"Декември"
		],
		dayOfWeekShort: [
			"Нд",
			"Пн",
			"Вт",
			"Ср",
			"Чт",
			"Пт",
			"Сб"
		],
		dayOfWeek: [
			"Неделя",
			"Понеделник",
			"Вторник",
			"Сряда",
			"Четвъртък",
			"Петък",
			"Събота"
		]
	},
	"fa-IR": {
		months: [
			"فروردین",
			"اردیبهشت",
			"خرداد",
			"تیر",
			"مرداد",
			"شهریور",
			"مهر",
			"آبان",
			"آذر",
			"دی",
			"بهمن",
			"اسفند"
		],
		dayOfWeekShort: [
			"یکشنبه",
			"دوشنبه",
			"سه شنبه",
			"چهارشنبه",
			"پنجشنبه",
			"جمعه",
			"شنبه"
		],
		dayOfWeek: [
			"یک‌شنبه",
			"دوشنبه",
			"سه‌شنبه",
			"چهارشنبه",
			"پنج‌شنبه",
			"جمعه",
			"شنبه",
			"یک‌شنبه"
		]
	},
	"ru-RU": {
		months: [
			"Январь",
			"Февраль",
			"Март",
			"Апрель",
			"Май",
			"Июнь",
			"Июль",
			"Август",
			"Сентябрь",
			"Октябрь",
			"Ноябрь",
			"Декабрь"
		],
		dayOfWeekShort: [
			"Вс",
			"Пн",
			"Вт",
			"Ср",
			"Чт",
			"Пт",
			"Сб"
		],
		dayOfWeek: [
			"Воскресенье",
			"Понедельник",
			"Вторник",
			"Среда",
			"Четверг",
			"Пятница",
			"Суббота"
		]
	},
	"uk-UA": {
		months: [
			"Січень",
			"Лютий",
			"Березень",
			"Квітень",
			"Травень",
			"Червень",
			"Липень",
			"Серпень",
			"Вересень",
			"Жовтень",
			"Листопад",
			"Грудень"
		],
		dayOfWeekShort: [
			"Нд",
			"Пн",
			"Вт",
			"Ср",
			"Чт",
			"Пт",
			"Сб"
		],
		dayOfWeek: [
			"Неділя",
			"Понеділок",
			"Вівторок",
			"Середа",
			"Четвер",
			"П'ятниця",
			"Субота"
		]
	},
	"en-EN": {
		months: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		],
		dayOfWeekShort: [
			"Sun",
			"Mon",
			"Tue",
			"Wed",
			"Thu",
			"Fri",
			"Sat"
		],
		dayOfWeek: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		]
	},
	"en-US": {
		months: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		],
		dayOfWeekShort: [
			"Sun",
			"Mon",
			"Tue",
			"Wed",
			"Thu",
			"Fri",
			"Sat"
		],
		dayOfWeek: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		]
	},
	"el-GR": {
		months: [
			"Ιανουάριος",
			"Φεβρουάριος",
			"Μάρτιος",
			"Απρίλιος",
			"Μάιος",
			"Ιούνιος",
			"Ιούλιος",
			"Αύγουστος",
			"Σεπτέμβριος",
			"Οκτώβριος",
			"Νοέμβριος",
			"Δεκέμβριος"
		],
		dayOfWeekShort: [
			"Κυρ",
			"Δευ",
			"Τρι",
			"Τετ",
			"Πεμ",
			"Παρ",
			"Σαβ"
		],
		dayOfWeek: [
			"Κυριακή",
			"Δευτέρα",
			"Τρίτη",
			"Τετάρτη",
			"Πέμπτη",
			"Παρασκευή",
			"Σάββατο"
		]
	},
	"de-CH": {
		months: [
			"Januar",
			"Februar",
			"März",
			"April",
			"Mai",
			"Juni",
			"Juli",
			"August",
			"September",
			"Oktober",
			"November",
			"Dezember"
		],
		dayOfWeekShort: [
			"So",
			"Mo",
			"Di",
			"Mi",
			"Do",
			"Fr",
			"Sa"
		],
		dayOfWeek: [
			"Sonntag",
			"Montag",
			"Dienstag",
			"Mittwoch",
			"Donnerstag",
			"Freitag",
			"Samstag"
		]
	},
	"nl-NL": {
		months: [
			"januari",
			"februari",
			"maart",
			"april",
			"mei",
			"juni",
			"juli",
			"augustus",
			"september",
			"oktober",
			"november",
			"december"
		],
		dayOfWeekShort: [
			"zo",
			"ma",
			"di",
			"wo",
			"do",
			"vr",
			"za"
		],
		dayOfWeek: [
			"zondag",
			"maandag",
			"dinsdag",
			"woensdag",
			"donderdag",
			"vrijdag",
			"zaterdag"
		]
	},
	"tr-TR": {
		months: [
			"Ocak",
			"Şubat",
			"Mart",
			"Nisan",
			"Mayıs",
			"Haziran",
			"Temmuz",
			"Ağustos",
			"Eylül",
			"Ekim",
			"Kasım",
			"Aralık"
		],
		dayOfWeekShort: [
			"Paz",
			"Pts",
			"Sal",
			"Çar",
			"Per",
			"Cum",
			"Cts"
		],
		dayOfWeek: [
			"Pazar",
			"Pazartesi",
			"Salı",
			"Çarşamba",
			"Perşembe",
			"Cuma",
			"Cumartesi"
		]
	},
	"fr-FR": {
		months: [
			"Janvier",
			"Février",
			"Mars",
			"Avril",
			"Mai",
			"Juin",
			"Juillet",
			"Août",
			"Septembre",
			"Octobre",
			"Novembre",
			"Décembre"
		],
		dayOfWeekShort: [
			"Dim",
			"Lun",
			"Mar",
			"Mer",
			"Jeu",
			"Ven",
			"Sam"
		],
		dayOfWeek: [
			"dimanche",
			"lundi",
			"mardi",
			"mercredi",
			"jeudi",
			"vendredi",
			"samedi"
		]
	},
	"es-ES": {
		months: [
			"Enero",
			"Febrero",
			"Marzo",
			"Abril",
			"Mayo",
			"Junio",
			"Julio",
			"Agosto",
			"Septiembre",
			"Octubre",
			"Noviembre",
			"Diciembre"
		],
		dayOfWeekShort: [
			"Dom",
			"Lun",
			"Mar",
			"Mié",
			"Jue",
			"Vie",
			"Sáb"
		],
		dayOfWeek: [
			"Domingo",
			"Lunes",
			"Martes",
			"Miércoles",
			"Jueves",
			"Viernes",
			"Sábado"
		]
	},
	"th-TH": {
		months: [
			"มกราคม",
			"กุมภาพันธ์",
			"มีนาคม",
			"เมษายน",
			"พฤษภาคม",
			"มิถุนายน",
			"กรกฎาคม",
			"สิงหาคม",
			"กันยายน",
			"ตุลาคม",
			"พฤศจิกายน",
			"ธันวาคม"
		],
		dayOfWeekShort: [
			"อา.",
			"จ.",
			"อ.",
			"พ.",
			"พฤ.",
			"ศ.",
			"ส."
		],
		dayOfWeek: [
			"อาทิตย์",
			"จันทร์",
			"อังคาร",
			"พุธ",
			"พฤหัส",
			"ศุกร์",
			"เสาร์",
			"อาทิตย์"
		]
	},
	"pl-PL": {
		months: [
			"styczeń",
			"luty",
			"marzec",
			"kwiecień",
			"maj",
			"czerwiec",
			"lipiec",
			"sierpień",
			"wrzesień",
			"październik",
			"listopad",
			"grudzień"
		],
		dayOfWeekShort: [
			"nd",
			"pn",
			"wt",
			"śr",
			"cz",
			"pt",
			"sb"
		],
		dayOfWeek: [
			"niedziela",
			"poniedziałek",
			"wtorek",
			"środa",
			"czwartek",
			"piątek",
			"sobota"
		]
	},
	"pt-PT": {
		months: [
			"Janeiro",
			"Fevereiro",
			"Março",
			"Abril",
			"Maio",
			"Junho",
			"Julho",
			"Agosto",
			"Setembro",
			"Outubro",
			"Novembro",
			"Dezembro"
		],
		dayOfWeekShort: [
			"Dom",
			"Seg",
			"Ter",
			"Qua",
			"Qui",
			"Sex",
			"Sab"
		],
		dayOfWeek: [
			"Domingo",
			"Segunda",
			"Terça",
			"Quarta",
			"Quinta",
			"Sexta",
			"Sábado"
		]
	},
	"ch-CH": {
		months: [
			"一月",
			"二月",
			"三月",
			"四月",
			"五月",
			"六月",
			"七月",
			"八月",
			"九月",
			"十月",
			"十一月",
			"十二月"
		],
		dayOfWeekShort: [
			"日",
			"一",
			"二",
			"三",
			"四",
			"五",
			"六"
		]
	},
	"se-SE": {
		months: [
			"Januari",
			"Februari",
			"Mars",
			"April",
			"Maj",
			"Juni",
			"Juli",
			"Augusti",
			"September",
			"Oktober",
			"November",
			"December"
		],
		dayOfWeekShort: [
			"Sön",
			"Mån",
			"Tis",
			"Ons",
			"Tor",
			"Fre",
			"Lör"
		]
	},
	"km-KH": {
		months: [
			"មករា​",
			"កុម្ភៈ",
			"មិនា​",
			"មេសា​",
			"ឧសភា​",
			"មិថុនា​",
			"កក្កដា​",
			"សីហា​",
			"កញ្ញា​",
			"តុលា​",
			"វិច្ឆិកា",
			"ធ្នូ​"
		],
		dayOfWeekShort: [
			"អាទិ​",
			"ច័ន្ទ​",
			"អង្គារ​",
			"ពុធ​",
			"ព្រហ​​",
			"សុក្រ​",
			"សៅរ៍"
		],
		dayOfWeek: [
			"អាទិត្យ​",
			"ច័ន្ទ​",
			"អង្គារ​",
			"ពុធ​",
			"ព្រហស្បតិ៍​",
			"សុក្រ​",
			"សៅរ៍"
		]
	},
	"kr-NG": {
		months: [
			"1월",
			"2월",
			"3월",
			"4월",
			"5월",
			"6월",
			"7월",
			"8월",
			"9월",
			"10월",
			"11월",
			"12월"
		],
		dayOfWeekShort: [
			"일",
			"월",
			"화",
			"수",
			"목",
			"금",
			"토"
		],
		dayOfWeek: [
			"일요일",
			"월요일",
			"화요일",
			"수요일",
			"목요일",
			"금요일",
			"토요일"
		]
	},
	"it-IT": {
		months: [
			"Gennaio",
			"Febbraio",
			"Marzo",
			"Aprile",
			"Maggio",
			"Giugno",
			"Luglio",
			"Agosto",
			"Settembre",
			"Ottobre",
			"Novembre",
			"Dicembre"
		],
		dayOfWeekShort: [
			"Dom",
			"Lun",
			"Mar",
			"Mer",
			"Gio",
			"Ven",
			"Sab"
		],
		dayOfWeek: [
			"Domenica",
			"Lunedì",
			"Martedì",
			"Mercoledì",
			"Giovedì",
			"Venerdì",
			"Sabato"
		]
	},
	"da-DK": {
		months: [
			"Januar",
			"Februar",
			"Marts",
			"April",
			"Maj",
			"Juni",
			"Juli",
			"August",
			"September",
			"Oktober",
			"November",
			"December"
		],
		dayOfWeekShort: [
			"Søn",
			"Man",
			"Tir",
			"Ons",
			"Tor",
			"Fre",
			"Lør"
		],
		dayOfWeek: [
			"søndag",
			"mandag",
			"tirsdag",
			"onsdag",
			"torsdag",
			"fredag",
			"lørdag"
		]
	},
	"no-NO": {
		months: [
			"Januar",
			"Februar",
			"Mars",
			"April",
			"Mai",
			"Juni",
			"Juli",
			"August",
			"September",
			"Oktober",
			"November",
			"Desember"
		],
		dayOfWeekShort: [
			"Søn",
			"Man",
			"Tir",
			"Ons",
			"Tor",
			"Fre",
			"Lør"
		],
		dayOfWeek: [
			"Søndag",
			"Mandag",
			"Tirsdag",
			"Onsdag",
			"Torsdag",
			"Fredag",
			"Lørdag"
		]
	},
	"ja-JP": {
		months: [
			"1月",
			"2月",
			"3月",
			"4月",
			"5月",
			"6月",
			"7月",
			"8月",
			"9月",
			"10月",
			"11月",
			"12月"
		],
		dayOfWeekShort: [
			"日",
			"月",
			"火",
			"水",
			"木",
			"金",
			"土"
		],
		dayOfWeek: [
			"日曜",
			"月曜",
			"火曜",
			"水曜",
			"木曜",
			"金曜",
			"土曜"
		]
	},
	"vi-VN": {
		months: [
			"Tháng 1",
			"Tháng 2",
			"Tháng 3",
			"Tháng 4",
			"Tháng 5",
			"Tháng 6",
			"Tháng 7",
			"Tháng 8",
			"Tháng 9",
			"Tháng 10",
			"Tháng 11",
			"Tháng 12"
		],
		dayOfWeekShort: [
			"CN",
			"T2",
			"T3",
			"T4",
			"T5",
			"T6",
			"T7"
		],
		dayOfWeek: [
			"Chủ nhật",
			"Thứ hai",
			"Thứ ba",
			"Thứ tư",
			"Thứ năm",
			"Thứ sáu",
			"Thứ bảy"
		]
	},
	"sl-SI": {
		months: [
			"Januar",
			"Februar",
			"Marec",
			"April",
			"Maj",
			"Junij",
			"Julij",
			"Avgust",
			"September",
			"Oktober",
			"November",
			"December"
		],
		dayOfWeekShort: [
			"Ned",
			"Pon",
			"Tor",
			"Sre",
			"Čet",
			"Pet",
			"Sob"
		],
		dayOfWeek: [
			"Nedelja",
			"Ponedeljek",
			"Torek",
			"Sreda",
			"Četrtek",
			"Petek",
			"Sobota"
		]
	},
	"cs-CZ": {
		months: [
			"Leden",
			"Únor",
			"Březen",
			"Duben",
			"Květen",
			"Červen",
			"Červenec",
			"Srpen",
			"Září",
			"Říjen",
			"Listopad",
			"Prosinec"
		],
		dayOfWeekShort: [
			"Ne",
			"Po",
			"Út",
			"St",
			"Čt",
			"Pá",
			"So"
		]
	},
	"hu-HU": {
		months: [
			"Január",
			"Február",
			"Március",
			"Április",
			"Május",
			"Június",
			"Július",
			"Augusztus",
			"Szeptember",
			"Október",
			"November",
			"December"
		],
		dayOfWeekShort: [
			"Va",
			"Hé",
			"Ke",
			"Sze",
			"Cs",
			"Pé",
			"Szo"
		],
		dayOfWeek: [
			"vasárnap",
			"hétfő",
			"kedd",
			"szerda",
			"csütörtök",
			"péntek",
			"szombat"
		]
	},
	"az-Cyrl-AZ": {
		months: [
			"Yanvar",
			"Fevral",
			"Mart",
			"Aprel",
			"May",
			"Iyun",
			"Iyul",
			"Avqust",
			"Sentyabr",
			"Oktyabr",
			"Noyabr",
			"Dekabr"
		],
		dayOfWeekShort: [
			"B",
			"Be",
			"Ça",
			"Ç",
			"Ca",
			"C",
			"Ş"
		],
		dayOfWeek: [
			"Bazar",
			"Bazar ertəsi",
			"Çərşənbə axşamı",
			"Çərşənbə",
			"Cümə axşamı",
			"Cümə",
			"Şənbə"
		]
	},
	"bs-Latn-BA": {
		months: [
			"Januar",
			"Februar",
			"Mart",
			"April",
			"Maj",
			"Jun",
			"Jul",
			"Avgust",
			"Septembar",
			"Oktobar",
			"Novembar",
			"Decembar"
		],
		dayOfWeekShort: [
			"Ned",
			"Pon",
			"Uto",
			"Sri",
			"Čet",
			"Pet",
			"Sub"
		],
		dayOfWeek: [
			"Nedjelja",
			"Ponedjeljak",
			"Utorak",
			"Srijeda",
			"Četvrtak",
			"Petak",
			"Subota"
		]
	},
	"ca-AD": {
		months: [
			"Gener",
			"Febrer",
			"Març",
			"Abril",
			"Maig",
			"Juny",
			"Juliol",
			"Agost",
			"Setembre",
			"Octubre",
			"Novembre",
			"Desembre"
		],
		dayOfWeekShort: [
			"Dg",
			"Dl",
			"Dt",
			"Dc",
			"Dj",
			"Dv",
			"Ds"
		],
		dayOfWeek: [
			"Diumenge",
			"Dilluns",
			"Dimarts",
			"Dimecres",
			"Dijous",
			"Divendres",
			"Dissabte"
		]
	},
	"en-GB": {
		months: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		],
		dayOfWeekShort: [
			"Sun",
			"Mon",
			"Tue",
			"Wed",
			"Thu",
			"Fri",
			"Sat"
		],
		dayOfWeek: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		]
	},
	"et-EE": {
		months: [
			"Jaanuar",
			"Veebruar",
			"Märts",
			"Aprill",
			"Mai",
			"Juuni",
			"Juuli",
			"August",
			"September",
			"Oktoober",
			"November",
			"Detsember"
		],
		dayOfWeekShort: [
			"P",
			"E",
			"T",
			"K",
			"N",
			"R",
			"L"
		],
		dayOfWeek: [
			"Pühapäev",
			"Esmaspäev",
			"Teisipäev",
			"Kolmapäev",
			"Neljapäev",
			"Reede",
			"Laupäev"
		]
	},
	"eu-ES": {
		months: [
			"Urtarrila",
			"Otsaila",
			"Martxoa",
			"Apirila",
			"Maiatza",
			"Ekaina",
			"Uztaila",
			"Abuztua",
			"Iraila",
			"Urria",
			"Azaroa",
			"Abendua"
		],
		dayOfWeekShort: [
			"Ig.",
			"Al.",
			"Ar.",
			"Az.",
			"Og.",
			"Or.",
			"La."
		],
		dayOfWeek: [
			"Igandea",
			"Astelehena",
			"Asteartea",
			"Asteazkena",
			"Osteguna",
			"Ostirala",
			"Larunbata"
		]
	},
	"fi-FI": {
		months: [
			"Tammikuu",
			"Helmikuu",
			"Maaliskuu",
			"Huhtikuu",
			"Toukokuu",
			"Kesäkuu",
			"Heinäkuu",
			"Elokuu",
			"Syyskuu",
			"Lokakuu",
			"Marraskuu",
			"Joulukuu"
		],
		dayOfWeekShort: [
			"Su",
			"Ma",
			"Ti",
			"Ke",
			"To",
			"Pe",
			"La"
		],
		dayOfWeek: [
			"sunnuntai",
			"maanantai",
			"tiistai",
			"keskiviikko",
			"torstai",
			"perjantai",
			"lauantai"
		]
	},
	"gl-ES": {
		months: [
			"Xan",
			"Feb",
			"Maz",
			"Abr",
			"Mai",
			"Xun",
			"Xul",
			"Ago",
			"Set",
			"Out",
			"Nov",
			"Dec"
		],
		dayOfWeekShort: [
			"Dom",
			"Lun",
			"Mar",
			"Mer",
			"Xov",
			"Ven",
			"Sab"
		],
		dayOfWeek: [
			"Domingo",
			"Luns",
			"Martes",
			"Mércores",
			"Xoves",
			"Venres",
			"Sábado"
		]
	},
	"hr-BA": {
		months: [
			"Siječanj",
			"Veljača",
			"Ožujak",
			"Travanj",
			"Svibanj",
			"Lipanj",
			"Srpanj",
			"Kolovoz",
			"Rujan",
			"Listopad",
			"Studeni",
			"Prosinac"
		],
		dayOfWeekShort: [
			"Ned",
			"Pon",
			"Uto",
			"Sri",
			"Čet",
			"Pet",
			"Sub"
		],
		dayOfWeek: [
			"Nedjelja",
			"Ponedjeljak",
			"Utorak",
			"Srijeda",
			"Četvrtak",
			"Petak",
			"Subota"
		]
	},
	"ko-KR": {
		months: [
			"1월",
			"2월",
			"3월",
			"4월",
			"5월",
			"6월",
			"7월",
			"8월",
			"9월",
			"10월",
			"11월",
			"12월"
		],
		dayOfWeekShort: [
			"일",
			"월",
			"화",
			"수",
			"목",
			"금",
			"토"
		],
		dayOfWeek: [
			"일요일",
			"월요일",
			"화요일",
			"수요일",
			"목요일",
			"금요일",
			"토요일"
		]
	},
	"lt-LT": {
		months: [
			"Sausio",
			"Vasario",
			"Kovo",
			"Balandžio",
			"Gegužės",
			"Birželio",
			"Liepos",
			"Rugpjūčio",
			"Rugsėjo",
			"Spalio",
			"Lapkričio",
			"Gruodžio"
		],
		dayOfWeekShort: [
			"Sek",
			"Pir",
			"Ant",
			"Tre",
			"Ket",
			"Pen",
			"Šeš"
		],
		dayOfWeek: [
			"Sekmadienis",
			"Pirmadienis",
			"Antradienis",
			"Trečiadienis",
			"Ketvirtadienis",
			"Penktadienis",
			"Šeštadienis"
		]
	},
	"lv-LV": {
		months: [
			"Janvāris",
			"Februāris",
			"Marts",
			"Aprīlis ",
			"Maijs",
			"Jūnijs",
			"Jūlijs",
			"Augusts",
			"Septembris",
			"Oktobris",
			"Novembris",
			"Decembris"
		],
		dayOfWeekShort: [
			"Sv",
			"Pr",
			"Ot",
			"Tr",
			"Ct",
			"Pk",
			"St"
		],
		dayOfWeek: [
			"Svētdiena",
			"Pirmdiena",
			"Otrdiena",
			"Trešdiena",
			"Ceturtdiena",
			"Piektdiena",
			"Sestdiena"
		]
	},
	"mk-MK": {
		months: [
			"јануари",
			"февруари",
			"март",
			"април",
			"мај",
			"јуни",
			"јули",
			"август",
			"септември",
			"октомври",
			"ноември",
			"декември"
		],
		dayOfWeekShort: [
			"нед",
			"пон",
			"вто",
			"сре",
			"чет",
			"пет",
			"саб"
		],
		dayOfWeek: [
			"Недела",
			"Понеделник",
			"Вторник",
			"Среда",
			"Четврток",
			"Петок",
			"Сабота"
		]
	},
	"mn-MN": {
		months: [
			"1-р сар",
			"2-р сар",
			"3-р сар",
			"4-р сар",
			"5-р сар",
			"6-р сар",
			"7-р сар",
			"8-р сар",
			"9-р сар",
			"10-р сар",
			"11-р сар",
			"12-р сар"
		],
		dayOfWeekShort: [
			"Дав",
			"Мяг",
			"Лха",
			"Пүр",
			"Бсн",
			"Бям",
			"Ням"
		],
		dayOfWeek: [
			"Даваа",
			"Мягмар",
			"Лхагва",
			"Пүрэв",
			"Баасан",
			"Бямба",
			"Ням"
		]
	},
	"pt-BR": {
		months: [
			"Janeiro",
			"Fevereiro",
			"Março",
			"Abril",
			"Maio",
			"Junho",
			"Julho",
			"Agosto",
			"Setembro",
			"Outubro",
			"Novembro",
			"Dezembro"
		],
		dayOfWeekShort: [
			"Dom",
			"Seg",
			"Ter",
			"Qua",
			"Qui",
			"Sex",
			"Sáb"
		],
		dayOfWeek: [
			"Domingo",
			"Segunda",
			"Terça",
			"Quarta",
			"Quinta",
			"Sexta",
			"Sábado"
		]
	},
	"sk-SK": {
		months: [
			"Január",
			"Február",
			"Marec",
			"Apríl",
			"Máj",
			"Jún",
			"Júl",
			"August",
			"September",
			"Október",
			"November",
			"December"
		],
		dayOfWeekShort: [
			"Ne",
			"Po",
			"Ut",
			"St",
			"Št",
			"Pi",
			"So"
		],
		dayOfWeek: [
			"Nedeľa",
			"Pondelok",
			"Utorok",
			"Streda",
			"Štvrtok",
			"Piatok",
			"Sobota"
		]
	},
	"sq-AL": {
		months: [
			"Janar",
			"Shkurt",
			"Mars",
			"Prill",
			"Maj",
			"Qershor",
			"Korrik",
			"Gusht",
			"Shtator",
			"Tetor",
			"Nëntor",
			"Dhjetor"
		],
		dayOfWeekShort: [
			"Die",
			"Hën",
			"Mar",
			"Mër",
			"Enj",
			"Pre",
			"Shtu"
		],
		dayOfWeek: [
			"E Diel",
			"E Hënë",
			"E Martē",
			"E Mërkurë",
			"E Enjte",
			"E Premte",
			"E Shtunë"
		]
	},
	"sr-YU": {
		months: [
			"Januar",
			"Februar",
			"Mart",
			"April",
			"Maj",
			"Jun",
			"Jul",
			"Avgust",
			"Septembar",
			"Oktobar",
			"Novembar",
			"Decembar"
		],
		dayOfWeekShort: [
			"Ned",
			"Pon",
			"Uto",
			"Sre",
			"čet",
			"Pet",
			"Sub"
		],
		dayOfWeek: [
			"Nedelja",
			"Ponedeljak",
			"Utorak",
			"Sreda",
			"Četvrtak",
			"Petak",
			"Subota"
		]
	},
	sr: {
		months: [
			"јануар",
			"фебруар",
			"март",
			"април",
			"мај",
			"јун",
			"јул",
			"август",
			"септембар",
			"октобар",
			"новембар",
			"децембар"
		],
		dayOfWeekShort: [
			"нед",
			"пон",
			"уто",
			"сре",
			"чет",
			"пет",
			"суб"
		],
		dayOfWeek: [
			"Недеља",
			"Понедељак",
			"Уторак",
			"Среда",
			"Четвртак",
			"Петак",
			"Субота"
		]
	},
	sv: {
		months: [
			"Januari",
			"Februari",
			"Mars",
			"April",
			"Maj",
			"Juni",
			"Juli",
			"Augusti",
			"September",
			"Oktober",
			"November",
			"December"
		],
		dayOfWeekShort: [
			"Sön",
			"Mån",
			"Tis",
			"Ons",
			"Tor",
			"Fre",
			"Lör"
		],
		dayOfWeek: [
			"Söndag",
			"Måndag",
			"Tisdag",
			"Onsdag",
			"Torsdag",
			"Fredag",
			"Lördag"
		]
	},
	"zh-TW": {
		months: [
			"一月",
			"二月",
			"三月",
			"四月",
			"五月",
			"六月",
			"七月",
			"八月",
			"九月",
			"十月",
			"十一月",
			"十二月"
		],
		dayOfWeekShort: [
			"日",
			"一",
			"二",
			"三",
			"四",
			"五",
			"六"
		],
		dayOfWeek: [
			"星期日",
			"星期一",
			"星期二",
			"星期三",
			"星期四",
			"星期五",
			"星期六"
		]
	},
	zh: {
		months: [
			"一月",
			"二月",
			"三月",
			"四月",
			"五月",
			"六月",
			"七月",
			"八月",
			"九月",
			"十月",
			"十一月",
			"十二月"
		],
		dayOfWeekShort: [
			"日",
			"一",
			"二",
			"三",
			"四",
			"五",
			"六"
		],
		dayOfWeek: [
			"星期日",
			"星期一",
			"星期二",
			"星期三",
			"星期四",
			"星期五",
			"星期六"
		]
	},
	ug: {
		months: [
			"1-ئاي",
			"2-ئاي",
			"3-ئاي",
			"4-ئاي",
			"5-ئاي",
			"6-ئاي",
			"7-ئاي",
			"8-ئاي",
			"9-ئاي",
			"10-ئاي",
			"11-ئاي",
			"12-ئاي"
		],
		dayOfWeek: [
			"يەكشەنبە",
			"دۈشەنبە",
			"سەيشەنبە",
			"چارشەنبە",
			"پەيشەنبە",
			"جۈمە",
			"شەنبە"
		]
	},
	"he-IL": {
		months: [
			"ינואר",
			"פברואר",
			"מרץ",
			"אפריל",
			"מאי",
			"יוני",
			"יולי",
			"אוגוסט",
			"ספטמבר",
			"אוקטובר",
			"נובמבר",
			"דצמבר"
		],
		dayOfWeekShort: [
			"א\"",
			"ב\"",
			"ג\"",
			"ד\"",
			"ה\"",
			"ו\"",
			"שבת"
		],
		dayOfWeek: [
			"ראשון",
			"שני",
			"שלישי",
			"רביעי",
			"חמישי",
			"שישי",
			"שבת",
			"ראשון"
		]
	},
	"hy-AM": {
		months: [
			"Հունվար",
			"Փետրվար",
			"Մարտ",
			"Ապրիլ",
			"Մայիս",
			"Հունիս",
			"Հուլիս",
			"Օգոստոս",
			"Սեպտեմբեր",
			"Հոկտեմբեր",
			"Նոյեմբեր",
			"Դեկտեմբեր"
		],
		dayOfWeekShort: [
			"Կի",
			"Երկ",
			"Երք",
			"Չոր",
			"Հնգ",
			"Ուրբ",
			"Շբթ"
		],
		dayOfWeek: [
			"Կիրակի",
			"Երկուշաբթի",
			"Երեքշաբթի",
			"Չորեքշաբթի",
			"Հինգշաբթի",
			"Ուրբաթ",
			"Շաբաթ"
		]
	},
	kg: {
		months: [
			"Үчтүн айы",
			"Бирдин айы",
			"Жалган Куран",
			"Чын Куран",
			"Бугу",
			"Кулжа",
			"Теке",
			"Баш Оона",
			"Аяк Оона",
			"Тогуздун айы",
			"Жетинин айы",
			"Бештин айы"
		],
		dayOfWeekShort: [
			"Жек",
			"Дүй",
			"Шей",
			"Шар",
			"Бей",
			"Жум",
			"Ише"
		],
		dayOfWeek: [
			"Жекшемб",
			"Дүйшөмб",
			"Шейшемб",
			"Шаршемб",
			"Бейшемби",
			"Жума",
			"Ишенб"
		]
	},
	"rm-CH": {
		months: [
			"Schaner",
			"Favrer",
			"Mars",
			"Avrigl",
			"Matg",
			"Zercladur",
			"Fanadur",
			"Avust",
			"Settember",
			"October",
			"November",
			"December"
		],
		dayOfWeekShort: [
			"Du",
			"Gli",
			"Ma",
			"Me",
			"Gie",
			"Ve",
			"So"
		],
		dayOfWeek: [
			"Dumengia",
			"Glindesdi",
			"Mardi",
			"Mesemna",
			"Gievgia",
			"Venderdi",
			"Sonda"
		]
	},
	"ka-GE": {
		months: [
			"იანვარი",
			"თებერვალი",
			"მარტი",
			"აპრილი",
			"მაისი",
			"ივნისი",
			"ივლისი",
			"აგვისტო",
			"სექტემბერი",
			"ოქტომბერი",
			"ნოემბერი",
			"დეკემბერი"
		],
		dayOfWeekShort: [
			"კვ",
			"ორშ",
			"სამშ",
			"ოთხ",
			"ხუთ",
			"პარ",
			"შაბ"
		],
		dayOfWeek: [
			"კვირა",
			"ორშაბათი",
			"სამშაბათი",
			"ოთხშაბათი",
			"ხუთშაბათი",
			"პარასკევი",
			"შაბათი"
		]
	},
	"kk-KZ": {
		months: [
			"Қаңтар",
			"Ақпан",
			"Наурыз",
			"Сәуір",
			"Мамыр",
			"Маусым",
			"Шілде",
			"Тамыз",
			"Қыркүйек",
			"Қазан",
			"Қараша",
			"Желтоқсан"
		],
		dayOfWeekShort: [
			"Жк",
			"Дс",
			"Сс",
			"Ср",
			"Бс",
			"Жм",
			"Сб"
		],
		dayOfWeek: [
			"Жексенбі",
			"Дүйсенбі",
			"Сейсенбі",
			"Сәрсенбі",
			"Бейсенбі",
			"Жұма",
			"Сенбі"
		]
	}
};
var jsonTranslate = {
	i18n: i18n
};

___$insertStyle(".date-picker-calendar {\n  position: relative;\n  font-family: Arial, Helvetica, sans-serif;\n  left: 50%;\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n  background-color: #f5f4f6;\n  min-width: 240px;\n  max-width: 300px;\n  width: 100%;\n  height: 260px;\n  font-size: 12px;\n  overflow: hidden;\n  transform: translateX(-50%);\n  color: var(--text-color);\n}\n.date-picker-calendar__shadow {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;\n}\n.date-picker-calendar .controls {\n  display: flex;\n  flex: 1 0 auto;\n  justify-content: space-between;\n  max-width: 300px;\n  gap: 10px;\n}\n.date-picker-calendar__header {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 10px 5px;\n  background-color: gray;\n  height: 1rem;\n  color: white;\n}\n.date-picker-calendar__header p {\n  margin: 0;\n  padding: 0;\n}\n.date-picker-calendar__header button {\n  appearance: none;\n  outline: none;\n  background-color: transparent;\n  border: none;\n  height: 100%;\n  color: white;\n  cursor: pointer;\n  opacity: 1;\n  transition: opacity 0.15s ease-in-out;\n}\n.date-picker-calendar__header button:hover {\n  opacity: 0.6;\n}\n.date-picker-calendar__header p {\n  font-size: 14px !important;\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.date-picker-calendar__header__month, .date-picker-calendar__header__year {\n  cursor: pointer;\n  opacity: 1;\n  transition: opacity 0.15s ease-in-out;\n}\n.date-picker-calendar__header__month:hover, .date-picker-calendar__header__year:hover {\n  opacity: 0.6;\n}\n.date-picker-calendar__header__year {\n  font-weight: bold;\n}\n.date-picker-calendar__table {\n  text-align: center;\n  top: 2.8rem;\n  left: 0;\n  height: 200px;\n  width: 96%;\n  position: absolute;\n  padding: 2%;\n  cursor: pointer;\n}\n.date-picker-calendar__table__days {\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(6, 1fr);\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  align-items: center;\n  justify-items: center;\n  transform: scale(1);\n  opacity: 1;\n}\n.date-picker-calendar__table__days div {\n  height: 27px;\n  width: 27px;\n  line-height: 27px;\n  text-align: center;\n}\n.date-picker-calendar__table__days div:hover {\n  opacity: 0.5;\n}\n.date-picker-calendar__table__days .day {\n  position: relative;\n  border-radius: 50%;\n}\n.date-picker-calendar__table__days .day span {\n  position: absolute;\n  height: 27;\n  width: 27;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.date-picker-calendar__table__days .day::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 22px;\n  width: 22px;\n  background-color: var(--primary-color) !important;\n  border-radius: 50%;\n  opacity: 0;\n  transform: translate(-50%, -50%);\n  transition: opacity 0.2s ease-in-out;\n}\n.date-picker-calendar__table__days .day--grey {\n  opacity: 0.3;\n}\n.date-picker-calendar__table__days .day-selected {\n  color: white;\n  font-weight: bold;\n}\n.date-picker-calendar__table__days .day-selected::before {\n  background-color: var(--primary-color) !important;\n  opacity: 0.8 !important;\n}\n.date-picker-calendar__table__days .day-label {\n  font-weight: bold;\n  pointer-events: none;\n}\n.date-picker-calendar__table__days .day-current {\n  font-weight: bold;\n}\n.date-picker-calendar__table__days .day-current::before {\n  background-color: inherit !important;\n  border: 1px solid;\n  opacity: 0.3;\n}\n.date-picker-calendar__table__months {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  align-items: center;\n  justify-items: center;\n  transition: all 0.15s ease-in-out;\n  transform: scale(0.8);\n  opacity: 0;\n}\n.date-picker-calendar__table__months .month {\n  opacity: 1;\n  transition: 0.1s ease-in-out;\n}\n.date-picker-calendar__table__months .month:hover {\n  opacity: 0.5;\n}\n.date-picker-calendar__table__years {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  align-items: center;\n  justify-items: center;\n  overflow: auto;\n  z-index: 1;\n  transition: all 0.15s ease-in-out;\n  transform: scale(0.8);\n  opacity: 0;\n}\n.date-picker-calendar__table__years .year {\n  height: 30px;\n  opacity: 1;\n  transition: 0.1s ease-in-out;\n}\n.date-picker-calendar__table__years .year:hover {\n  opacity: 0.5;\n}\n.date-picker-calendar .show-table {\n  animation: show-table 0.3s ease-in 0.1s both;\n}\n.date-picker-calendar .hide-table {\n  pointer-events: none;\n  animation: hide-table 0.1s ease-in both;\n}\n@keyframes show-table {\n  0% {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes hide-table {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n}");

var DatePickerCalendar = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#059ECE' : _b, _c = _a.textColor, textColor = _c === void 0 ? '#70757A' : _c, _d = _a.elevation, elevation = _d === void 0 ? false : _d, _e = _a.lang, lang = _e === void 0 ? "fr-FR" : _e, _f = _a.year, year = _f === void 0 ? new Date().getFullYear() : _f, _g = _a.month, month = _g === void 0 ? new Date().getMonth() : _g, _h = _a.day, day = _h === void 0 ? new Date().getDate() : _h, _j = _a.intervalYearsSelection, intervalYearsSelection = _j === void 0 ? [
        new Date().getFullYear() - 90,
        new Date().getFullYear()
    ] : _j, onSelect = _a.onSelect, onClose = _a.onClose;
    var i18n = new Map(Object.entries(jsonTranslate.i18n));
    var translate = new Map(Object.entries(i18n.get(lang)));
    var translateDaysShort = Array.from(translate.get("dayOfWeekShort"));
    var translateMonth = Array.from(translate.get("months"));
    var currentDate = new Date(year, month, day);
    // sort the array so that the first day is Monday
    var firstDay = translateDaysShort[0];
    translateDaysShort = translateDaysShort.slice(1);
    translateDaysShort.push(firstDay);
    // Set State
    var _k = react.useState(0), nDaysInMonth = _k[0], setNDaysInMonth = _k[1];
    var _l = react.useState(0), firstDaysInMonth = _l[0], setFirstDaysInMonth = _l[1];
    var _m = react.useState(day), selectDay = _m[0], setSelectDay = _m[1];
    var _o = react.useState(month), selectMonth = _o[0], setSelectMonth = _o[1];
    var _p = react.useState(year), selectYear = _p[0], setSelectYear = _p[1];
    var _q = react.useState(new Date()), value = _q[0], setValue = _q[1];
    var _r = react.useState(), showDays = _r[0], setShowDays = _r[1];
    var _s = react.useState(false), showMonths = _s[0], setShowMonths = _s[1];
    var _t = react.useState(false), showYears = _t[0], setShowYears = _t[1];
    react.useEffect(function () {
        setValue(new Date(year, month, day));
    }, [year, month, day]);
    react.useEffect(function () {
        setSelectYear(selectYear);
        setSelectMonth(selectMonth);
        setSelectDay(selectDay);
        if (selectMonth < 0) {
            setSelectYear(selectYear - 1);
            setSelectMonth(11);
        }
        if (selectMonth > 11) {
            setSelectYear(selectYear + 1);
            setSelectMonth(0);
        }
        setFirstDaysInMonth(new Date(selectYear, selectMonth, 0).getDay());
        setNDaysInMonth(new Date(selectYear, selectMonth + 1, 0).getDate());
    }, [selectDay, selectMonth, selectYear]);
    var generateDaysTable = function () {
        var table = [];
        var previousMonthNDays = new Date(selectYear, selectMonth - 1, 0).getDate();
        var nextMountCounterDays = 1;
        translateDaysShort.map(function (day) { return table.push(jsxRuntime.jsx("div", exports.__assign({ className: "day-label" }, { children: day }), day)); });
        for (var index = 1; index <= 6 * 7; index++) {
            var dayNumber = index - firstDaysInMonth;
            var currentDateTable = new Date(selectYear, selectMonth, dayNumber);
            var daySelected = currentDateTable.getTime() === value.getTime();
            var currentDateSelected = currentDateTable.getTime() === currentDate.getTime();
            if (dayNumber <= nDaysInMonth && dayNumber >= 1) {
                table.push(jsxRuntime.jsx("div", exports.__assign({ onClick: handleClickDay, className: "day".concat(daySelected && !currentDateSelected
                        ? " day-selected"
                        : "").concat(currentDateSelected
                        ? " day-current"
                        : "") }, { children: jsxRuntime.jsx("span", { children: dayNumber }) }), "day-".concat(index)));
            }
            else {
                if (dayNumber <= 0) {
                    table.push(jsxRuntime.jsx("div", exports.__assign({ className: "day--grey" }, { children: jsxRuntime.jsx("span", { children: previousMonthNDays + dayNumber }) }), "day-".concat(index)));
                }
                else {
                    table.push(jsxRuntime.jsx("div", exports.__assign({ className: "day--grey" }, { children: jsxRuntime.jsx("span", { children: nextMountCounterDays }) }), "day-".concat(index)));
                    nextMountCounterDays++;
                }
            }
        }
        return table;
    };
    var generateMonthsTable = function () {
        var table = [];
        translateMonth.map(function (month, index) { return table.push(jsxRuntime.jsx("div", exports.__assign({ className: "month", onClick: handleClickMonth, "data-id": index }, { children: month }), month)); });
        return table;
    };
    var generateYearsTable = function () {
        var table = [];
        for (var index = intervalYearsSelection[0]; index <= intervalYearsSelection[1]; index++) {
            table.push(jsxRuntime.jsx("div", exports.__assign({ className: "year", onClick: handleClickYear }, { children: index }), index));
        }
        return table;
    };
    var handleClickDay = function (e) {
        e.preventDefault();
        var result = new Date(selectYear, selectMonth, parseInt(e.currentTarget.querySelector("span").innerHTML));
        setValue(result);
        if (onSelect != null)
            onSelect(result, result.toLocaleDateString(lang, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
            }));
    };
    var handleClickMonth = function (e) {
        e.preventDefault();
        showDaysTable();
        setSelectMonth(parseInt(e.currentTarget.dataset.id));
    };
    var handleClickYear = function (e) {
        e.preventDefault();
        showMonthsTable();
        setSelectYear(parseInt(e.currentTarget.innerHTML));
    };
    var previousMonth = function (e) {
        e.preventDefault();
        setSelectMonth(selectMonth - 1);
    };
    var nextMonth = function (e) {
        e.preventDefault();
        setSelectMonth(selectMonth + 1);
    };
    var reset = function (e) {
        e.preventDefault();
        showDaysTable();
        setSelectDay(day);
        setSelectMonth(month);
        setSelectYear(year);
    };
    var close = function (e) {
        e.preventDefault();
        if (onClose != null)
            onClose();
    };
    var showDaysTable = function () {
        setShowDays(true);
        setShowMonths(false);
        setShowYears(false);
    };
    var showMonthsTable = function () {
        setShowDays(false);
        setShowMonths(true);
        setShowYears(false);
    };
    var showYearsTable = function () {
        setShowDays(false);
        setShowMonths(false);
        setShowYears(true);
    };
    return (jsxRuntime.jsxs("div", exports.__assign({ className: "".concat(className ? className + " " : "", "date-picker-calendar").concat(elevation ? " date-picker-calendar__shadow" : ""), style: {
            '--primary-color': color,
            '--text-color': textColor
        } }, { children: [jsxRuntime.jsxs("div", exports.__assign({ className: "date-picker-calendar__header", style: { backgroundColor: color } }, { children: [jsxRuntime.jsx("button", exports.__assign({ onClick: reset }, { children: jsxRuntime.jsx(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faHome }) })), jsxRuntime.jsxs("div", exports.__assign({ className: "controls" }, { children: [jsxRuntime.jsx("button", exports.__assign({ onClick: previousMonth }, { children: jsxRuntime.jsx(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faAngleLeft }) })), jsxRuntime.jsxs("p", { children: [jsxRuntime.jsx("span", exports.__assign({ className: "date-picker-calendar__header__month", onClick: showMonthsTable }, { children: translateMonth[selectMonth] })), jsxRuntime.jsx("span", exports.__assign({ className: "date-picker-calendar__header__year", onClick: showYearsTable }, { children: selectYear }))] }), jsxRuntime.jsx("button", exports.__assign({ onClick: nextMonth }, { children: jsxRuntime.jsx(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faAngleRight }) }))] })), jsxRuntime.jsx("button", exports.__assign({ onClick: close }, { children: jsxRuntime.jsx(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faClose }) }))] })), jsxRuntime.jsxs("div", exports.__assign({ className: "date-picker-calendar__table" }, { children: [jsxRuntime.jsx("div", exports.__assign({ className: "date-picker-calendar__table__days ".concat(showDays === true ? "show-table" : showDays === false ? "hide-table" : "") }, { children: generateDaysTable() })), jsxRuntime.jsx("div", exports.__assign({ className: "date-picker-calendar__table__months ".concat(showMonths ? "show-table" : "hide-table") }, { children: generateMonthsTable() })), jsxRuntime.jsx("div", exports.__assign({ className: "date-picker-calendar__table__years ".concat(showYears ? "show-table" : "hide-table") }, { children: generateYearsTable() }))] }))] })));
};

exports.DatePickerCalendar = DatePickerCalendar;
//# sourceMappingURL=index-cd1e5c2e.js.map
