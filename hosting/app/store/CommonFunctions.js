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
}
