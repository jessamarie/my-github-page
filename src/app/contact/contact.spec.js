"use strict";

describe("ContactController", function () {

  var controller;

  beforeEach(module("app.contact.controller"));
//  beforeEach(module("app.todosService"));

  it("should be defined", function () {

    expect(controller).toBeDefined();

  });

});

describe("Contact directive", function () {

  beforeEach(module("app.contact.directive"));

});
