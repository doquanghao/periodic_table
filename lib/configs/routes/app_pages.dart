import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:periodic_table/screen/home/bindings/home_binding.dart';
import 'package:periodic_table/screen/home/view/home_screen.dart';

part './app_routes.dart';

abstract class AppPages {
  static final pages = [
    GetPage(
      name: "/",
      page: () => const HomeScreen(),
      binding: HomeBinding(),
      curve: Curves.easeOutSine,
      transition: Transition.rightToLeft,
      transitionDuration: const Duration(milliseconds: 400),
    ),
  ];
}
