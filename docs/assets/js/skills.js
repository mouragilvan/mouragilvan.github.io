const PHP_SK = 90;
const LARAVEL_SK = 90;
const JS_SK= 90;
const CSS_SK = 92;
const ANGULAR_SK = 89;
const JAVA_SK = 65;
const REACTNATIVE_SK = 80;
const NODEJS_SK = 97;
const SQKSERVER_SK = 80;
const POSTGRESQL_SK = 70;
const ORACLE_SK = 65;
const VUE_SK = 80;
const MYSQL_SK = 90;
//Animar skills
if (pathName == "/skills/") {

    var iterator1 = 0;
    var iterator2 = 0;
    var iterator3 = 0;
    var iterator4 = 0;
    var iterator5 = 0;
    var iterator6 = 0;
    var iterator7 = 0;
    var iterator8 = 0;
    var iterator9 = 0;
    var iterator10 = 0;
    var iterator11 = 0;
    var iterator12 = 0;
    var iterator13 = 0;

    setInterval(function () {

        //PHP SKILL ANIMATION 
        if (iterator1 <= PHP_SK) {
            document.getElementById("php-skill").style.cssText = `width: ${iterator1}%`
            iterator1 += 10;
        }

        if (iterator2 <= LARAVEL_SK) {
            document.getElementById("laravel-skill").style.cssText = `width: ${iterator2}%`
            iterator2 += 10;
        }

        if (iterator3 <= JS_SK) {
            document.getElementById("javascript-skill").style.cssText = `width: ${iterator3}%`
            iterator3 += 10;
        }

        if (iterator4 <= CSS_SK) {
            document.getElementById("css-skill").style.cssText = `width: ${iterator4}%`
            iterator4 += 10;
        }
        if (iterator5 <= ANGULAR_SK) {
            document.getElementById("angular-skill").style.cssText = `width: ${iterator5}%`
            iterator5 += 10;
        }
        if (iterator6 <= JAVA_SK) {
            document.getElementById("java-skill").style.cssText = `width: ${iterator6}%`
            iterator6 += 10;
        }
        if (iterator7 <= REACTNATIVE_SK) {
            document.getElementById("reactnative-skill").style.cssText = `width: ${iterator7}%`
            iterator7 += 10;
        }
        if (iterator8 <= NODEJS_SK) {
            document.getElementById("nodejs-skill").style.cssText = `width: ${iterator8}%`
            iterator8 += 10;
        }
        if (iterator9 <= SQKSERVER_SK) {
            document.getElementById("sqlserver-skill").style.cssText = `width: ${iterator9}%`
            iterator9 += 10;
        }
        if (iterator10 <= POSTGRESQL_SK) {
            document.getElementById("postgresql-skill").style.cssText = `width: ${iterator10}%`
            iterator10 += 10;
        }
        if (iterator11 <= ORACLE_SK) {
            document.getElementById("oracle-skill").style.cssText = `width: ${iterator11}%`
            iterator11 += 10;
        }
        if (iterator12 <= VUE_SK) {
            document.getElementById("vue-skill").style.cssText = `width: ${iterator12}%`
            iterator12 += 10;
        }
        if (iterator13 <= MYSQL_SK) {
            document.getElementById("mysql-skill").style.cssText = `width: ${iterator13}%`
            iterator13 += 10;
        }

    }, 130);

}