CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email_id` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mobile_number` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mobile_number` (`mobile_number`)
)


CREATE TABLE `venues` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `code` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `timezone` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
)

CREATE TABLE `events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title1` varchar(50) NOT NULL,
  `title2` varchar(50) NOT NULL,
  `location` varchar(50) NOT NULL,
  `location_type` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `venue_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `venue_id` (`venue_id`),
  CONSTRAINT `events_ibfk_1` FOREIGN KEY (`venue_id`) REFERENCES `venues` (`id`)
)

CREATE TABLE `performances` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `show_start_datetime` datetime NOT NULL,
  `show_end_datetime` datetime NOT NULL,
  `sale_start` varchar(25) NOT NULL,
  `status` varchar(25) NOT NULL,
  `ticket_capacity` int(10) unsigned NOT NULL,
  `event_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `event_id` (`event_id`),
  CONSTRAINT `performances_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`)
)

