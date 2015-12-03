# Understanding-AngularJS

My contributions from the Understanding AngularJS course at https://www.udemy.com/learn-angularjs/learn

**NB**: If you use my files unchanged in the two-way-binding
you will need to make some configuration changes. I have set up a number
of aliases in my `/etc/hosts` file, including node.local, i.e.

```
127.0.0.1 localhost     # This line will already be in there

127.0.0.1 node.local    # These are the lines that I added
127.0.0.1 pg.local
127.0.0.1 mongodb.local
```

Otherwise, you can replace the `'node.local'` in the AJAX calls
with either `'localhost'` or `'127.0.0.1'`

To use the two-way-binding directory you need to install
[Node](https://nodejs.org/). Then

```bash
cd two-way-binding
npm install
node index.js
```

I also suggest installing nodemon and using that to run your Node projects.
That can be done with

```bash
npm install nodemon -g
```

You may need to use `sudo`.

Then, point your browser at `http://node.local:3100`.

Feel free to contact me if you have any questions.
