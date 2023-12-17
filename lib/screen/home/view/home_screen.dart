
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:periodic_table/screen/home/controllers/home_controller.dart';
import 'package:periodic_table/screen/home/view/table_page.dart';


class HomeScreen extends GetView<HomeController> {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return TablePage();
  }
}
