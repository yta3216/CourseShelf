import { expect, test, describe } from 'vitest'
import { validateFormData } from '../routes/new-course'

describe('check if the passed form data has all required fields', () => {
    test('reject missing term', () => {
        expect(validateFormData({ courseName: "Introduction to Data Science", department: "DATA_SCIENCE" })).toEqual({ message: "Please fill out all fields" })
    })
    test('reject missing department', () => {
        expect(validateFormData({ courseName: "Introduction to Data Science", term: "2023S1" })).toEqual({ message: "Please fill out all fields" })
    })
    test('reject missing courseName', () => {
        expect(validateFormData({ department: "DATA_SCIENCE", term: "2023S1" })).toEqual({ message: "Please fill out all fields" })
    })

})

describe('check if the term format is correct', () => {
    test('reject more than four digits at front', () => {
        expect(validateFormData({ courseName: "Introduction to Data Science", department: "DATA_SCIENCE", term: "20023S1" })).toEqual({ message: "Term must be 4 numbers followed by W or S then 1 or 2" })
    })
    test('reject character that is not W or S', () => {
        expect(validateFormData({ courseName: "Introduction to Data Science", department: "DATA_SCIENCE", term: "2023Z1" })).toEqual({ message: "Term must be 4 numbers followed by W or S then 1 or 2" })
    })
    test('reject end digit that is not 1 or 2', () => {
        expect(validateFormData({ courseName: "Introduction to Data Science", department: "DATA_SCIENCE", term: "2023S3" })).toEqual({ message: "Term must be 4 numbers followed by W or S then 1 or 2" })
    })
})

test('check if validateFormData passes with valid information', () => {
    expect(validateFormData({ courseName: "Introduction to Data Science", department: "DATA_SCIENCE", term: "2023S1" })).toBeNull()
})