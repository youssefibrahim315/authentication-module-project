import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/modules/database/services/database/database.service';

@Injectable()
export class AuthenticationService {
    constructor(private databaseService: DatabaseService) { }
    async register(email: string, password: string) {
        const db = this.databaseService.getDb();
        const usersCollection = db.collection('users');
        const user = { email, password };
        await usersCollection.insertOne(user);
    }

    async login(email: string, password: string) {
        const db = this.databaseService.getDb();
        const usersCollection = db.collection('users');

        const user = await usersCollection.findOne({ email, password });

        if (!user) {
            throw new Error('Invalid login credentials');
        }
        return user;
    }
}
