// ユーザー情報を保存する配列を定義
const users = [];

// Userクラスを定義
class User {
    constructor(name, maill) {
        this.name = name;
        this.maill = maill;
    }

    // ユーザー情報を取得するメソッド
    getUser() {
        return [this.name, this.maill];
    }
}

// ユーザー情報を登録する関数
function registerUser() {
    // nameフィールドの値を取得
    let username = document.getElementById('name');
    // emailフィールドの値を取得
    let usermaill = document.getElementById('maill');

    // メールアドレスの重複を確認
    //後で
    if (user=== user) {
        // 既に登録済みの場合のメッセージ
        console.log("すでに登録しているメールアドレスです。");
        return;
    } else {
        // 新規ユーザーを登録
        let newUser = new User(username, usermaill);
        users.push(newUser);
        console.log(`名前: ${username}, メール: ${usermaill} が登録完了しました。`);
    }

    // 登録後にnameフィールドの値を削除
    document.getElementById('name').value = '';
    // 登録後にemailフィールドの値を削除
    document.getElementById('maill').value = '';
}

// 登録されたユーザー情報を1件ずつコンソール出力する関数
function findUser() {
    users.forEach(user => {
        console.log(`名前: ${user.name}, メールアドレス: ${user.maill}`);
    });
}