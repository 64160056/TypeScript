interface Rectangle {
    width : number;
    heigth : number;

}
interface ColoredRectangle extends Rectangle{
    color: string
}

const rectangie: Rectangle = {
    width : 20,
    heigth : 10,
}
console.log(rectangie)

const coloredRectangle: ColoredRectangle = {
    width : 20,
    heigth : 10,
    color: "red"
}
console.log(coloredRectangle)