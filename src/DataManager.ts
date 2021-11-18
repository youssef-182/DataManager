import { existsSync, mkdirSync } from 'fs';
import {join} from 'path';

export default class DataManager {
	public static makeDirectoryIfNotExistsSync(headPath: string, tailPath?: string | undefined) {
		var fullPath: string | null = null;
		if(typeof headPath == 'undefined') {
			fullPath = null;
			console.error('No path has been provided.');
		} else if(typeof tailPath == 'undefined') {
			fullPath = headPath;
			console.info(`CHECKING IF ${fullPath} EXISTS...`);
			if(!existsSync(fullPath)) {
				console.info(`CREATING ${fullPath}...`);
				mkdirSync(fullPath, {recursive:true});
				console.info(`DONE.`);
			} else {
				console.info(`${fullPath} ALREADY EXISTS!`);
			}
		} else {
			fullPath = join(headPath, tailPath);
			if(!existsSync(fullPath)) {
				console.info(`CREATING ${fullPath}`);
				mkdirSync(fullPath, {recursive:true});
				console.info(`DONE.`);
			} else {
				console.info(`${fullPath} ALREADY EXISTS.`);
			}
		}
	}
}