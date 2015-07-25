Meteor.startup(function () {
	/*BrowserPolicy.framing.allowAll();
	BrowserPolicy.content.allowFrameOrigin("https://www.google.com");*/
  if (Posts.find({}).count() === 0) {
    Posts.insert({
      title: Fake.sentence(),
      body: Fake.paragraph(),
      published: Fake.fromArray([true, false])
    });
  }

});
