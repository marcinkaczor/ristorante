const utility = require("./utility")
// @ponicode
describe("utility.updateObject", () => {
    test("0", () => {
        let callFunction = () => {
            utility.updateObject(true, ["2017-09-29T19:01:00.000", "01:04:03", "01:04:03"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utility.updateObject(false, ["2017-09-29T19:01:00.000", "2017-09-29T23:01:00.000Z", "01:04:03"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utility.updateObject(true, ["2017-09-29T23:01:00.000Z", "01:04:03", "01:04:03"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utility.updateObject(false, ["01:04:03", "2017-09-29T23:01:00.000Z", "01:04:03"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utility.updateObject(false, ["01:04:03", "2017-09-29T23:01:00.000Z", "2017-09-29T23:01:00.000Z"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utility.updateObject(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
