import { WebPlugin } from '@capacitor/core';
export class BrotherPrintWeb extends WebPlugin {
    constructor() {
        super({
            name: 'BrotherPrint',
            platforms: ['web'],
        });
    }
    /**
     * Print with Base64
     */
    async printImage(_options) {
        return {
            value: true,
        };
    }
    /**
     * Search Wifi Printer
     */
    async searchWiFiPrinter() { }
    /**
     * search Bluetooth Printer
     */
    async searchBLEPrinter() { }
}
//# sourceMappingURL=web.js.map