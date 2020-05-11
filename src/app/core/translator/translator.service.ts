import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TranslatorService {

    private defaultLanguage: string = 'vi';

    private availablelangs = [
        { code: 'vi', text: 'Tiếng Việt' },
        { code: 'en', text: 'English' }
    ];

    constructor(public translate: TranslateService) {

        if (!translate.getDefaultLang())
            translate.setDefaultLang(this.defaultLanguage);

        this.useLanguage();

    }

    useLanguage(lang: string = null) {
        this.translate.use(lang || this.translate.getDefaultLang());
    }

    getAvailableLanguages() {
        return this.availablelangs;
    }

}
