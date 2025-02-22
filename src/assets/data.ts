
export enum Category {
    General = "General",
    Gaming = "Gaming",
    ML = "ML",
    HCI = "HCI",

}


export interface CardType {
    id: number
    title: string
    body: string
    imgUrl?: string
    readMoreLink?: string
    category?: Array<Category>

}



const cardData: CardType[] = [
    {
        "id": 0,
        "title": "Co-Designing Rehabilitation Wearables with Physiotherapists",
        "body": "",
        "imgUrl": "docs/assets/images/PhysioImage.svg",
        category: [Category.HCI]

    },

    {
        "id": 1,
        "title": "Giant Inflatable Hugging Robots - Master’s thesis",
        "body": "Creating 6ft plus inflatable robots is an emerging research area. These robots are powered by bouncy castle blowers and by opening valves, pressure chambers are filled causing the robot to move. I identified a gap within the existing research and applied a user-centric approach to investigating hugging interactions with these robots. ",
        "imgUrl": " docs/assets/images/inflatable.jpg",
        "readMoreLink": " https://github.com/hamiltonrconnor/HuggingRobots",
        category: [Category.HCI]

    }
    ,
    {
        "id": 2,
        "title": "BirdGang - Unity Game Project",
        "body": "Developed a 3D browser based game using the Unity game engine. Resulting in a 1st class mark and feedback that the project was “judged as outstanding by the panel entering truly professional territory”.",
        "imgUrl": "docs/assets/images/birdgang.png",
        "readMoreLink": " https://hamiltonrconnor.github.io/BirdGang/",
        category: [Category.Gaming]
    }
    ,
    {
        "id": 3,
        "title": "Biologically plausible deep learning library ",
        "body": "Traditional machine learning methods have little evidence of biological plausibility. I wrote a library following the scikit-learn conventions that implement the backpropagation, asynchronous backpropagation, feedback alignment and weight mirroring algorithms for training neural networks. These algorithms are able to successfully classify the Fashion_MNIST dataset.",
        "imgUrl": "docs/assets/images/FeedbackAlignment.png",
        category: [Category.ML]
    }
    ,
    {
        "id": 4,
        "title": "Device energy modelling",
        "body": "Working with DIMPACT (a collaboration between the University of Bristol and Carnstone consultancy), I and three other students developed a more sophisticated end-user device energy model to support carbon reduction strategies using an Agile methodology. ",
        "imgUrl": "",
        category: [Category.Gaming]
    },

    {
        "id": 5,
        "title": "Audio genre classification with PyTorch",
        "body": "Working in a small team, we explored how using pre-trained deep convolutional neural networks like DenseNet can be applied to audio spectrograms and compared the genre classification performance to much shallower networks. This improved testing accuracy from 63% to 78%.",
        "imgUrl": "docs/assets/images/ResultsTable.png",
        category: [Category.ML]

    },



]

export default cardData