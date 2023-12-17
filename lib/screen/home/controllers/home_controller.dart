import 'dart:convert';

import 'package:flutter/services.dart';
import 'package:get/get.dart';
import 'package:periodic_table/model/ElementData.dart';

class HomeController extends GetxController {
  RxList<ElementData?> listElementData = <ElementData?>[].obs;

  @override
  Future<void> onInit() async {
    super.onInit();
  }

  Future getListElementData() async {
    await gridList().then((value) {
      if (value.isNotEmpty) {
        listElementData.value = value;
      }
    });
  }

  Future<List<ElementData?>> gridList() async {
    final gridList = rootBundle
        .loadString('assets/elementsGrid.json')
        .then((source) => jsonDecode(source)['elements'] as List)
        .then((list) => list
            .map((json) => json != null ? ElementData.fromJson(json) : null)
            .toList());
    return gridList;
  }
}
