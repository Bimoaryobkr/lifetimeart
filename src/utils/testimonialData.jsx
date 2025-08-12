const dataTestimonials = [
    {
        avatar: "/assets/icons/3.png",
        name: "Emily Carter",
        star: 5,
        feedback:
            "Brilliant service from start to finish. The team was professional, communicative, and the results exceeded my expectations. My new bathroom looks amazing!",
    },
    {
        avatar: "/assets/icons/3.png",
        name: "Emily Carter",
        star: 5,
        feedback:
            "I couldn’t be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
    },
    {
        avatar: "/assets/icons/3.png",
        name: "Emily Carter",
        star: 5,
        feedback:
            "Refit transformed our outdoor space with a beautiful garden path. The work was completed on time, and the finish is excellent. A great team to work with",
    },
];

const duplicatedtestimonials = [
    ...dataTestimonials,
    ...dataTestimonials,
    ...dataTestimonials,
    ...dataTestimonials,
    ...dataTestimonials,
];

export default duplicatedtestimonials;
