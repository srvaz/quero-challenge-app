export interface Scholarship {
    full_price: number;
    price_with_discount: number;
    discount_percentage: number;
    start_date: string;
    enrollment_semester: string;
    enabled: boolean;
    course: Course;
    university: University;
    campus: Campus;
}

export interface Campus {
    name: string;
    city: string;
}

export interface Course {
    name: string;
    kind: string;
    level: string;
    shift: string;
}

export interface University {
    name: string;
    score: number;
    logo_url: string;
}
