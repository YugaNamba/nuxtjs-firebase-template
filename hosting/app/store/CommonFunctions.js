import { firestore } from '@/plugins/firebase'

export class CommonFunctions {
  static setCreatedAt(doc) {
    if (!doc.createdAt) doc.createdAt = firestore.FieldValue.serverTimestamp()
    return doc
  }

  static updateUpdatedAt(doc) {
    doc.updatedAt = firestore.FieldValue.serverTimestamp()
    return doc
  }

  static setTimestamp(doc) {
    return CommonFunctions.setCreatedAt(CommonFunctions.updateUpdatedAt(doc))
  }

  static serialize(doc) {
    const data = doc.data()
    Object.defineProperty(data, 'id', {
      value: doc.id,
      enumerable: true,
    })

    const fromCache = doc.metadata.fromCache
    Object.defineProperty(data, 'fromCache', {
      value: fromCache,
      enumerable: true,
    })
    return data
  }

  static getData(doc) {
    if (!doc.exists) {
      console.log('No such document!')
      return null
    }
    const data = doc.data()
    data.id = doc.id
    return data
  }
}
