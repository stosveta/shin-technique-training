// add dictionary training
// add oi giaku modifiers to the training
// add migi hidary  modifiers to the training
// add dachi training
// add renraku training
// add konfigurable training

const DZHODAN_THUKI = "dzhodan-tsuki";
const CHUDAN_THUKI = "chudan-tsuki";
const GEDAN_THUKI = "gedan-tsuki";
const DZHODAN_MOROTE_THUKI = "dzhodan-morote-tsuki";
const CHUDAN_MOROTE_THUKI = "chudan-morote-tsuki";
const GEDAN_MOROTE_THUKI = "gedan-morote-tsuki";
const DZHODAN_UKE = "dzhodan-uke";
const GEDAN_BARAI = "gedan-barai";
const GANMEN_HIZA_GERI = "ganmen-hiza-geri";
const CHUDAN_HIZA_GERI = "chudan-hiza-geri";
const KIN_GERI = "kin-geri";

const TECHNIQUES_10_KIU = [
	DZHODAN_THUKI,
	CHUDAN_THUKI,
	GEDAN_THUKI,
	DZHODAN_MOROTE_THUKI,
	CHUDAN_MOROTE_THUKI,
	GEDAN_MOROTE_THUKI,
	DZHODAN_UKE,
	GEDAN_BARAI,
	GANMEN_HIZA_GERI,
	CHUDAN_HIZA_GERI,
	KIN_GERI
];

const AGO_UCHI = "ago-uchi";
const UCHI_UKE = "uchi-uke";
const SOTO_UKE = "soto-uke";
const UCHI_MOROTE_UKE = "uchi-morote-uke";
const DZHODAN_CHUSOKU_MAE_GERI = "dzhodan-chusoku-mae-geri";
const CHUDAN_CHUSOKU_MAE_GERI = "chudan-chusoku-mae-geri";

const TECHNIQUES_9_KIU = [
	AGO_UCHI,
	UCHI_UKE,
	SOTO_UKE,
	UCHI_MOROTE_UKE,
	DZHODAN_CHUSOKU_MAE_GERI,
	CHUDAN_CHUSOKU_MAE_GERI
];

const SHYTA_TSUKI = "shyta-tsuki";
const DZHODAN_DZIUN_TSUKI = "dzhodan-dziun-tsuki";
const CHUDAN_DZIUN_TSUKI = "chudan-dziun-tsuki";
const GEDAN_DZIUN_TSUKI = "gedan-dziun-tsuki";
const DZHODAN_TATE_TSUKI = "dzhodan-tate-tsuki";
const CHUDAN_TATE_TSUKI = "chudan-tate-tsuki";
const GEDAN_TATE_TSUKI = "gedan-tate-tsuki";
const MOROTE_UCHI_UKE = "morote-uchi-uke";
const UCHI_UKE_GEDAN_BARAI = "uchi-uke-gedan-barai";
const KAKE_VAKE_UKE = "kake-vake-uke";
const DZHODAN_MAVASHY_GERI = "dzhodan-mavashy-geri";
const CHUDAN_MAVASHY_GERI = "chudan-mavashy-geri";
const GEDAN_MAVASHY_GERI = "gedan-mavashy-geri";

const TECHNIQUES_8_KIU = [
	SHYTA_TSUKI,
	DZHODAN_DZIUN_TSUKI,
	CHUDAN_DZIUN_TSUKI,
	GEDAN_DZIUN_TSUKI,
	DZHODAN_TATE_TSUKI,
	CHUDAN_TATE_TSUKI,
	GEDAN_TATE_TSUKI,
	MOROTE_UCHI_UKE,
	UCHI_UKE_GEDAN_BARAI,
	KAKE_VAKE_UKE,
	DZHODAN_MAVASHY_GERI,
	CHUDAN_MAVASHY_GERI,
	GEDAN_MAVASHY_GERI
];

const TETSUI_KOMIKAME = "tetsui-komikame-uchi";
const TETSUI_OROSHY = "tetsui-oroshy-ganmen-uchi";
const TETSUI_HIZO = "tetsui-hizo-uchi";
const DZHODAN_TETSUI_YOKO = "tetsui-yoko-dzhodan";
const CHUDAN_TETSUI_YOKO = "tetsui-yoko-chudan";
const GEDAN_TETSUI_YOKO = "tetsui-yoko-gedan";
const SHUTO_MAVASHY_UKE = "shuto-mavashy-uke";
const MOROTE_GEDAN_BARAI = "morote-gedan-barai";
const CHUSOKU_MAE_KIAGI = "chusoku-mae-kiagi";
const TEISOKU_SOTO_MAVASHY_KIAGI = "teisoku-soto-mavashy-kiagi";
const UCHI_HAISOKU_KIAGI = "uchi-haisoku-kiagi";
const SOKUTO_YOKO_KIAGI = "sokuto-yoko-kiagi";
const UCHI_HAISOKU_GERI = "uchi-haisoku-geri";

const TECHNIQUES_7_KIU = [
	TETSUI_KOMIKAME,
	TETSUI_OROSHY,
	TETSUI_HIZO,
	DZHODAN_TETSUI_YOKO,
	CHUDAN_TETSUI_YOKO,
	GEDAN_TETSUI_YOKO,
	SHUTO_MAVASHY_UKE,
	MOROTE_GEDAN_BARAI,
	CHUSOKU_MAE_KIAGI,
	TEISOKU_SOTO_MAVASHY_KIAGI,
	UCHI_HAISOKU_KIAGI,
	SOKUTO_YOKO_KIAGI,
	UCHI_HAISOKU_GERI
];

const DZHODAN_YONHON_NUKITE = "dzhodan-yonhon-nukite";
const CHUDAN_YONHON_NUKITE = "chudan-yonhon-nukite";
const ME_TSUKI = "me-tsuki";
const URAKEN_SHOMEN_GANMEN = "uraken-shomen-ganmen";
const URAKEN_SAYU_GANMEN_UCHI = "uraken-sayu-ganmen-uchi";
const URAKEN_HIZO_UCHI = "uraken-hizo-uchi";
const URAKEN_GANMEN_OROSHY_UCHI = "uraken-ganmen-oroshy-uchi";
const URAKEN_MAVASHY_UCHI = "uraken-mavashy-uchi";
const URAKEN_YOKO_UCHI = "uraken-yoko-uchi";
const OSAE_UKE = "osae-uke";
const DZHUDZHY_UKE = "dzhudzhy-uke";
const KANTSETSU_GERI = "kantsetsu-geri";
const CHUDAN_SOKUTO_YOKO_GERI = "chudan-sokuto-yoko-geri";
const DZHODAN_SOKUTO_YOKO_GERI = "dzhodan-sokuto-yoko-geri";

const TECHNIQUES_6_KIU = [
	DZHODAN_YONHON_NUKITE,
	CHUDAN_YONHON_NUKITE,
	ME_TSUKI,
	URAKEN_SHOMEN_GANMEN,
	URAKEN_SAYU_GANMEN_UCHI,
	URAKEN_HIZO_UCHI,
	URAKEN_GANMEN_OROSHY_UCHI,
	URAKEN_MAVASHY_UCHI,
	URAKEN_YOKO_UCHI,
	OSAE_UKE,
	DZHUDZHY_UKE,
	KANTSETSU_GERI,
	CHUDAN_SOKUTO_YOKO_GERI,
	DZHODAN_SOKUTO_YOKO_GERI
];

const DZHODAN_HIDZHY_ATE = "dzhodan-hidzhy-ate";
const SHOTEI_UKE_DZHODAN = "shotei-uke-dzhodan";
const SHOTEI_UKE_CHUDAN = "shotei-uke-chudan";
const SHOTEI_UKE_GEDAN = "shotei-uke-gedan";
const SHOTEI_UCHI_DZHODAN = "shotei-uchi-dzhodan";
const SHOTEI_UCHI_CHUDAN = "shotei-uchi-chudan";
const SHOTEI_UCHI_GEDAN = "shotei-uchi-gedan";
const KAGE_GERI_DZHODAN = "kage-geri-dzhodan";
const KAGE_GERI_CHUDAN = "kage-geri-chudan";
const KAGE_GERI_GEDAN = "kage-geri-gedan";

const TECHNIQUES_5_KIU = [
	DZHODAN_HIDZHY_ATE,
	SHOTEI_UKE_DZHODAN,
	SHOTEI_UKE_CHUDAN,
	SHOTEI_UKE_GEDAN,
	SHOTEI_UCHI_DZHODAN,
	SHOTEI_UCHI_CHUDAN,
	SHOTEI_UCHI_GEDAN,
	KAGE_GERI_DZHODAN,
	KAGE_GERI_CHUDAN,
	KAGE_GERI_GEDAN
];

const SHUTO_SAKOTSU_OROSHY_UCHI = "shuto-sakotsu-oroshy-uchi";
const SHUTO_SAKOTSU_UCHI_KOMI = "shuto-sakotsu-uchi-komi";
const SHUTO_GANMEN_UCHI = "shuto-ganmen-uchi";
const SHUTO_KHIZO_UCHI = "shuto-khizo-uchi";
const SHUTO_DZHODAN_UCHI_UCHI = "shuto-dzhodan-uchi-uchi";
const SHUTO_YOKO_UCHI_DZHODAN = "shuto-yoko-uchi-dzhodan";
const SHUTO_YOKO_UCHI_CHUDAN = "shuto-yoko-uchi-chudan";
const SHUTO_YOKO_UCHI_GEDAN = "shuto-yoko-uchi-gedan";
const SHUTO_DZHODAN_UKE = "shuto-dzhodan-uke";
const SHUTO_SOTO_UKE = "shuto-soto-uke";
const SHUTO_UCHI_UKE = "shuto-uchi-uke";
const SHUTO_GEDAN_BARAI = "shuto-gedan-barai";
const SHUTO_DZHODAN_UCHI_UKE = "shuto-dzhodan-uchi-uke";
const SHUTO_MAE_MAVASHY_UKE = "shuto-mae-mavashy-uke";
const USHYRO_GERI_DZHODAN = "ushyro-geri-dzhodan";
const USHYRO_GERI_CHUDAN = "ushyro-geri-chudan";

const TECHNIQUES_4_KIU = [
	SHUTO_SAKOTSU_OROSHY_UCHI,
	SHUTO_SAKOTSU_UCHI_KOMI,
	SHUTO_GANMEN_UCHI,
	SHUTO_KHIZO_UCHI,
	SHUTO_DZHODAN_UCHI_UCHI,
	SHUTO_YOKO_UCHI_DZHODAN,
	SHUTO_YOKO_UCHI_CHUDAN,
	SHUTO_YOKO_UCHI_GEDAN,
	SHUTO_DZHODAN_UKE,
	SHUTO_SOTO_UKE,
	SHUTO_UCHI_UKE,
	SHUTO_GEDAN_BARAI,
	SHUTO_DZHODAN_UCHI_UKE,
	SHUTO_MAE_MAVASHY_UKE,
	USHYRO_GERI_DZHODAN,
	USHYRO_GERI_CHUDAN
];



const HIDZHY_ATE_DZHODAN = "dzhodan-hidzhy-ate";
const HIDZHY_ATE_CHUDAN = "chudan-hidzhy-ate";
const MAE_HIDZHY_ATE_DZHODAN = "dzhodan-mae-hidzhy-ate";
const MAE_HIDZHY_ATE_CHUDAN = "chudan-mae-hidzhy-ate";
const AGE_HIDZHY_ATE_DZHODAN = "dzhodan-age-hidzhy-ate";
const AGE_HIDZHY_ATE_CHUDAN = "chudan-age-hidzhy-ate";
const OROSHI_HIDZHY_ATE = "oroshi-hidzhy-ate";
const USHYRO_HIDZHY_ATE = "ushyro-hidzhy-ate";
const SHUTO_DZHUDZHY_UKE_DZHODAN = "dzhodan-shuto-dzhudzhy-uke";
const SHUTO_DZHUDZHY_UKE_GEDAN = "gedan-shuto-dzhudzhy-uke";
const KAKATO_MAE_GERI_DZHODAN = "dzhodan-kakato-mae-geri";
const KAKATO_MAE_GERI_CHUDAN = "chudan-kakato-mae-geri";
const KAKATO_MAE_GERI_GEDAN = "gedan-kakato-mae-geri";
const AGE_MAE_GERI_GEDAN = "age-mae-geri";
const UCHI_OROSHI_KAKATO_GERI = "uchi-oroshi-kakato-geri";
const SOTO_OROSHI_KAKATO_GERI = "soto-oroshi-kakato-geri";

const TECHNIQUES_3_KIU = [
	HIDZHY_ATE_DZHODAN, 
	HIDZHY_ATE_CHUDAN,
	MAE_HIDZHY_ATE_DZHODAN,
	MAE_HIDZHY_ATE_CHUDAN,
	AGE_HIDZHY_ATE_DZHODAN,
	AGE_HIDZHY_ATE_CHUDAN,
	OROSHI_HIDZHY_ATE,
	USHYRO_HIDZHY_ATE,
	SHUTO_DZHUDZHY_UKE_DZHODAN,
	SHUTO_DZHUDZHY_UKE_GEDAN,
	KAKATO_MAE_GERI_DZHODAN,
	KAKATO_MAE_GERI_CHUDAN,
	KAKATO_MAE_GERI_GEDAN,
	AGE_MAE_GERI_GEDAN,
	UCHI_OROSHI_KAKATO_GERI,
	SOTO_OROSHI_KAKATO_GERI
];

const DZHODAN_HIRAKEN_TSUKI = "dzhodan-hiraken-tsuki";
const CHUDAN_HIRAKEN_TSUKI = "chudan-hiraken-tsuki";
const DZHODAN_HIRAKEN_MAVASHY_UCHI = "dzhodan-hiraken-mavashy-uchi";
const CHUDAN_HIRAKEN_MAVASHY_UCHI = "chudan-hiraken-mavashy-uchi";
const HIRAKEN_OROSHY_UCHI = "hiraken-oroshy-uchi";
const DZHODAN_HAISHU_UCHI = "dzhodan-haishu-uchi";
const CHUDAN_HAISHU_UCHI = "chudan-haishu-uchi";
const DZHODAN_AGE_TSUKI = "dzhodan-age-tsuki";
const DZHODAN_MAVASHY_KOKEN_UCHI = "dzhodan-mavashy-koken-uchi";
const CHUDAN_MAVASHY_KOKEN_UCHI = "chudan-mavashy-koken-uchi";
const GEDAN_KOKEN_UCHI = "gedan-koken-uchi";
const SHOMEN_GANMEN_KOKEN_UCHI = "shomen-ganmen-koken-uchi";
const DZHODAN_KOKEN_UKE = "dzhodan-koken-uke";
const CHUDAN_MAVASHY_KOKEN_UKE = "chudan-mavashy-koken-uke";
const GEDAN_MAVASHY_KOKEN_UKE = "gedan-mavashy-koken-uke";
const CHUDAN_UCHI_KOKEN_UKE = "chudan-uchi-koken-uke";
const OI_TOBI_MAE_GERI = "oi-tobi-mae-geri";
const GIAKU_TOBI_MAE_GERI = "giaku-tobi-mae-geri";
const OI_TOBI_HIZA_MAE_GERI = "oi-tobi-hiza-mae-geri";
const GIAKU_TOBI_HIZA_MAE_GERI = "giaku-tobi-hiza-mae-geri";
const CHUDAN_CHUDAN_TOBI_NIDAN_GERI = "chudan-chudan-tobi-nidan-geri";
const CHUDAN_DZHODAN_TOBI_NIDAN_GERI = "chudan-dzhodan-tobi-nidan-geri";
const DZHODAN_DZHODAN_TOBI_NIDAN_GERI = "dzhodan-dzhodan-tobi-nidan-geri";
const CHUDAN_MOROTE_TOBI_NIDAN_GERI = "chudan-morote-tobi-nidan-geri";
const DZHODAN_MOROTE_TOBI_NIDAN_GERI = "dzhodan-morote-tobi-nidan-geri";

const TECHNIQUES_2_KIU = [
	DZHODAN_HIRAKEN_TSUKI,
	CHUDAN_HIRAKEN_TSUKI,
	DZHODAN_HIRAKEN_MAVASHY_UCHI,
	CHUDAN_HIRAKEN_MAVASHY_UCHI,
	HIRAKEN_OROSHY_UCHI,
	DZHODAN_HAISHU_UCHI,
	CHUDAN_HAISHU_UCHI,
	DZHODAN_AGE_TSUKI,
	DZHODAN_MAVASHY_KOKEN_UCHI,
	CHUDAN_MAVASHY_KOKEN_UCHI,
	GEDAN_KOKEN_UCHI,
	SHOMEN_GANMEN_KOKEN_UCHI,
	DZHODAN_KOKEN_UKE,
	CHUDAN_MAVASHY_KOKEN_UKE,
	GEDAN_MAVASHY_KOKEN_UKE,
	CHUDAN_UCHI_KOKEN_UKE,
	OI_TOBI_MAE_GERI,
	GIAKU_TOBI_MAE_GERI,
	OI_TOBI_HIZA_MAE_GERI,
	GIAKU_TOBI_HIZA_MAE_GERI,
	CHUDAN_CHUDAN_TOBI_NIDAN_GERI,
	CHUDAN_DZHODAN_TOBI_NIDAN_GERI,
	DZHODAN_DZHODAN_TOBI_NIDAN_GERI,
	CHUDAN_MOROTE_TOBI_NIDAN_GERI,
	DZHODAN_MOROTE_TOBI_NIDAN_GERI
];



const ALL_TECHNIQUES_MAP = {
	10: TECHNIQUES_10_KIU,
	9: TECHNIQUES_9_KIU,
	8: TECHNIQUES_8_KIU,
	7: TECHNIQUES_7_KIU,
	6: TECHNIQUES_6_KIU,
	5: TECHNIQUES_5_KIU,
	4: TECHNIQUES_4_KIU,
	3: TECHNIQUES_3_KIU,
	2: TECHNIQUES_2_KIU
};

const TECHNIQUES_MAP = {
	10: TECHNIQUES_10_KIU,
	9: TECHNIQUES_9_KIU,
	8: TECHNIQUES_8_KIU,
	7: TECHNIQUES_7_KIU,
	6: TECHNIQUES_6_KIU,
	5: TECHNIQUES_5_KIU,
	4: TECHNIQUES_4_KIU,
	3: TECHNIQUES_3_KIU,
	2: TECHNIQUES_2_KIU,

};

export default TECHNIQUES_MAP;