struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let rect1 = Rectangle {width: 30, height: 50};

    println!("The area of the rectangle is {} square pixels.", area(&rect1));
}

fn area(rectangle: &Rectangle) -> u32 {
    rectangle.width * rectangle.height
}

// fn main() {
//     let react1 = (30, 50);

//     println!("The area fo the rectangle is {} square pixels.", area(react1));
// }

// fn area(dimensions: (u32, u32)) -> u32 {
//     dimensions.0 * dimensions.1
// }

// fn main() {
//     let width1 = 30;
//     let height1 = 50;

//     println!("The area of the rectangle is {} square pixels,", area(width1, height1));
// }

// fn area (width: u32, height: u32) -> u32 {
//     width * height
// }
