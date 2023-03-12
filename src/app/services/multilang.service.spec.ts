import { TestBed } from '@angular/core/testing';

import { MultilangService } from './multilang.service';

describe('MultilangService', () => {
  let service: MultilangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultilangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the correct translation for a given key and language', () => {
    const key = 'search';
    const language = 'en';
    const expectedTranslation = 'search';
    const actualTranslation = service.getTranslation(key, language);
    expect(actualTranslation).toEqual(expectedTranslation);
  });

  it('should return undefined if the translation for a given key and language does not exist', () => {
    const key = 'nonexistentKey';
    const language = 'de';
    const actualTranslation = service.getTranslation(key, language);
    expect(actualTranslation).toBeUndefined();
  });

  it('should return the default language translation if the translation for a given key and language does not exist', () => {
    const key = 'search';
    const language = 'de';
    const expectedTranslation = 'suchen';
    const actualTranslation = service.getTranslation(key, language);
    expect(actualTranslation).toEqual(expectedTranslation);
  });
});