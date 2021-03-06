const expect = require('expect');
const {
    Users
} = require('./users');

describe('Users', () => {

    beforeEach(() => {
        users = new Users();
        users.users = [{
                id: '1',
                name: 'Josef',
                room: 'room1'
            },
            {
                id: '2',
                name: 'Claudia',
                room: 'room2'
            },
            {
                id: '3',
                name: 'Lukas',
                room: 'room1'
            }
        ]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Mike',
            room: 'room3'
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toMatchObject([user]);
    });

    it('should remove a new user', () => {
        var userId = '1';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = '9';
        var user = users.removeUser(userId);
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '4';
        var user = users.getUser(userId);
        expect(user).toBeFalsy();
    });

    it('should add return names for room1', () => {
        var userList = users.getUserList('room1');
        expect(userList).toMatchObject(['Josef', 'Lukas']);
    });

    it('should add return names for room1', () => {
        var userList = users.getUserList('room2');
        expect(userList).toMatchObject(['Claudia']);
    });
});