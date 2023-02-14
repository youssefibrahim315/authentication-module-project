import { Injectable } from '@nestjs/common';
import { MongoClient, MongoClientOptions } from 'mongodb';
import { setting } from 'src/modules/setting/environments';

@Injectable()
export class DatabaseService {
    private client: MongoClient;

    async connect() {
        const options: MongoClientOptions = {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        };
        this.client = await MongoClient.connect(setting.urlConnection );
    }

    getDb() {
        return this.client.db('authentication-module-project');
    }
}
