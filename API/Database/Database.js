class Database {
  constructor(service='aws') {

    if (this.service === 'aws') {
      this.provider = require('aws-sdk')
      this.docClient = new AWS.DynamoDB.DocumentClient({
          region: 'us-east-2',
          endpoint: 'https://dynamodb.us-east-2.amazonaws.com'
      })
    }
  }

  // get the tables in the kvdb
  tables() {

  }

  async put(entry) {
    if (this.service === 'aws') {
      try {
        await this.docClient.put({
          TableName: "",
          Item: {}
        }).promise()
      } catch (error) {
        console.log(error)
      }
    }
  }

  async query(entry) {
    var result = null
    if (this.service === 'aws') {
      try {
        result = await docClient.query({
          TableName: '',
          KeyConditionExpression: '',
          ExpressionAttributeValues: {}
        }).promise()
      } catch (error) {
        console.log(error)
      }
    }

    return result
  }
}

module.exports = Database