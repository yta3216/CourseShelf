import { test, expect } from '@playwright/test';

test('create course', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', {name: 'New Course'}).click();
    await page.getByLabel('Course Name').fill('Computer Programming III');
    await page.getByLabel('Department').selectOption('COMPUTER_SCIENCE');
    await page.getByLabel('Term').fill('2027W1');
    await page.getByRole('button', {name: 'Submit'}).click();

    await expect(page.getByRole('heading', {name: 'Computer Programming III'})).toBeVisible();
})

test('create material for course', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', {name: 'New Course'}).click();
    await page.getByLabel('Course Name').fill('Computer Programming IV');
    await page.getByLabel('Department').selectOption('COMPUTER_SCIENCE');
    await page.getByLabel('Term').fill('2027W2');
    await page.getByRole('button', {name: 'Submit'}).click();
    
    await page.getByRole('link', {name: 'Add Material'}).click();
    await page.getByLabel('Material Title').fill('Lecture 1 Slides');
    await page.getByLabel('Type').selectOption('LECTURE_NOTES');
    await page.getByLabel('Description').fill('Contains the slides for Lecture 1.');
    
    await page.getByRole('button', {name: 'Submit'}).click();
    await expect(page.getByText('Lecture 1 Slides')).toBeVisible();
    await expect(page.getByText('Lecture Notes')).toBeVisible();
    await expect(page.getByText('Description: Contains the slides for Lecture 1.')).toBeVisible();
})