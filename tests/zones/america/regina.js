"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Regina"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Regina", { offset: true, expect: "America/Managua" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Regina", { abbr: true, expect: "America/Managua" }),

	"1905" : helpers.makeTestYear("America/Regina", [
		["1905-09-01T06:58:35+00:00", "23:59:59", "LMT", 25116 / 60],
		["1905-09-01T06:58:36+00:00", "23:58:36", "MST", 420]
	]),

	"1918" : helpers.makeTestYear("America/Regina", [
		["1918-04-14T08:59:59+00:00", "01:59:59", "MST", 420],
		["1918-04-14T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1918-10-27T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1918-10-27T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1930" : helpers.makeTestYear("America/Regina", [
		["1930-05-04T06:59:59+00:00", "23:59:59", "MST", 420],
		["1930-05-04T07:00:00+00:00", "01:00:00", "MDT", 360],
		["1930-10-05T05:59:59+00:00", "23:59:59", "MDT", 360],
		["1930-10-05T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1931" : helpers.makeTestYear("America/Regina", [
		["1931-05-03T06:59:59+00:00", "23:59:59", "MST", 420],
		["1931-05-03T07:00:00+00:00", "01:00:00", "MDT", 360],
		["1931-10-04T05:59:59+00:00", "23:59:59", "MDT", 360],
		["1931-10-04T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1932" : helpers.makeTestYear("America/Regina", [
		["1932-05-01T06:59:59+00:00", "23:59:59", "MST", 420],
		["1932-05-01T07:00:00+00:00", "01:00:00", "MDT", 360],
		["1932-10-02T05:59:59+00:00", "23:59:59", "MDT", 360],
		["1932-10-02T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1933" : helpers.makeTestYear("America/Regina", [
		["1933-05-07T06:59:59+00:00", "23:59:59", "MST", 420],
		["1933-05-07T07:00:00+00:00", "01:00:00", "MDT", 360],
		["1933-10-01T05:59:59+00:00", "23:59:59", "MDT", 360],
		["1933-10-01T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1934" : helpers.makeTestYear("America/Regina", [
		["1934-05-06T06:59:59+00:00", "23:59:59", "MST", 420],
		["1934-05-06T07:00:00+00:00", "01:00:00", "MDT", 360],
		["1934-10-07T05:59:59+00:00", "23:59:59", "MDT", 360],
		["1934-10-07T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1937" : helpers.makeTestYear("America/Regina", [
		["1937-04-11T06:59:59+00:00", "23:59:59", "MST", 420],
		["1937-04-11T07:00:00+00:00", "01:00:00", "MDT", 360],
		["1937-10-10T05:59:59+00:00", "23:59:59", "MDT", 360],
		["1937-10-10T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1938" : helpers.makeTestYear("America/Regina", [
		["1938-04-10T06:59:59+00:00", "23:59:59", "MST", 420],
		["1938-04-10T07:00:00+00:00", "01:00:00", "MDT", 360],
		["1938-10-02T05:59:59+00:00", "23:59:59", "MDT", 360],
		["1938-10-02T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1939" : helpers.makeTestYear("America/Regina", [
		["1939-04-09T06:59:59+00:00", "23:59:59", "MST", 420],
		["1939-04-09T07:00:00+00:00", "01:00:00", "MDT", 360],
		["1939-10-08T05:59:59+00:00", "23:59:59", "MDT", 360],
		["1939-10-08T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1940" : helpers.makeTestYear("America/Regina", [
		["1940-04-14T06:59:59+00:00", "23:59:59", "MST", 420],
		["1940-04-14T07:00:00+00:00", "01:00:00", "MDT", 360],
		["1940-10-13T05:59:59+00:00", "23:59:59", "MDT", 360],
		["1940-10-13T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1941" : helpers.makeTestYear("America/Regina", [
		["1941-04-13T06:59:59+00:00", "23:59:59", "MST", 420],
		["1941-04-13T07:00:00+00:00", "01:00:00", "MDT", 360],
		["1941-10-12T05:59:59+00:00", "23:59:59", "MDT", 360],
		["1941-10-12T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1942" : helpers.makeTestYear("America/Regina", [
		["1942-02-09T08:59:59+00:00", "01:59:59", "MST", 420],
		["1942-02-09T09:00:00+00:00", "03:00:00", "MWT", 360]
	]),

	"1945" : helpers.makeTestYear("America/Regina", [
		["1945-08-14T22:59:59+00:00", "16:59:59", "MWT", 360],
		["1945-08-14T23:00:00+00:00", "17:00:00", "MPT", 360],
		["1945-09-30T07:59:59+00:00", "01:59:59", "MPT", 360],
		["1945-09-30T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1946" : helpers.makeTestYear("America/Regina", [
		["1946-04-14T08:59:59+00:00", "01:59:59", "MST", 420],
		["1946-04-14T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1946-10-13T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1946-10-13T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1947" : helpers.makeTestYear("America/Regina", [
		["1947-04-27T08:59:59+00:00", "01:59:59", "MST", 420],
		["1947-04-27T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1947-09-28T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1947-09-28T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1948" : helpers.makeTestYear("America/Regina", [
		["1948-04-25T08:59:59+00:00", "01:59:59", "MST", 420],
		["1948-04-25T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1948-09-26T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1948-09-26T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1949" : helpers.makeTestYear("America/Regina", [
		["1949-04-24T08:59:59+00:00", "01:59:59", "MST", 420],
		["1949-04-24T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1949-09-25T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1949-09-25T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1950" : helpers.makeTestYear("America/Regina", [
		["1950-04-30T08:59:59+00:00", "01:59:59", "MST", 420],
		["1950-04-30T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1950-09-24T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1950-09-24T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1951" : helpers.makeTestYear("America/Regina", [
		["1951-04-29T08:59:59+00:00", "01:59:59", "MST", 420],
		["1951-04-29T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1951-09-30T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1951-09-30T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1952" : helpers.makeTestYear("America/Regina", [
		["1952-04-27T08:59:59+00:00", "01:59:59", "MST", 420],
		["1952-04-27T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1952-09-28T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1952-09-28T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1953" : helpers.makeTestYear("America/Regina", [
		["1953-04-26T08:59:59+00:00", "01:59:59", "MST", 420],
		["1953-04-26T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1953-09-27T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1953-09-27T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1954" : helpers.makeTestYear("America/Regina", [
		["1954-04-25T08:59:59+00:00", "01:59:59", "MST", 420],
		["1954-04-25T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1954-09-26T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1954-09-26T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1955" : helpers.makeTestYear("America/Regina", [
		["1955-04-24T08:59:59+00:00", "01:59:59", "MST", 420],
		["1955-04-24T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1955-09-25T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1955-09-25T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1956" : helpers.makeTestYear("America/Regina", [
		["1956-04-29T08:59:59+00:00", "01:59:59", "MST", 420],
		["1956-04-29T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1956-09-30T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1956-09-30T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1957" : helpers.makeTestYear("America/Regina", [
		["1957-04-28T08:59:59+00:00", "01:59:59", "MST", 420],
		["1957-04-28T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1957-09-29T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1957-09-29T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1959" : helpers.makeTestYear("America/Regina", [
		["1959-04-26T08:59:59+00:00", "01:59:59", "MST", 420],
		["1959-04-26T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1959-10-25T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1959-10-25T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1960" : helpers.makeTestYear("America/Regina", [
		["1960-04-24T08:59:59+00:00", "01:59:59", "MST", 420],
		["1960-04-24T09:00:00+00:00", "03:00:00", "CST", 360]
	])
};