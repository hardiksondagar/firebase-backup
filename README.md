# Firebase Backup

Firebase data backup using node and store in json file.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone https://github.com/hardiksondagar/firebase-backup # or clone your own fork
cd firebase-backup
```

You must set `FIREBASE_URL` and `FIREBASE_SECRET` in `index.js`.
```sh
mkdir backup
npm install
npm start
```



## Deploy on unix to run as service 
Set path of index.js in `firebase-backup.conf` ( line #18 )
```
cp firebase-backup.conf /etc/init/firebase-backup.conf
service firebase-backup start
```
### Check log 
```sh
tail -f /var/log/firebase-backup.log
```
